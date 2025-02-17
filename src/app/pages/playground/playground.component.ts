import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import hljs from 'highlight.js';
import { Editor, toHTML, Toolbar, Validators } from 'ngx-editor';
import { ShareCommonModule } from 'src/app/common/common.module';
import { SimulatorComponent } from "./simulator/simulator.component";
import { OpenaiService } from 'src/app/services/openai.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true, imports: [ShareCommonModule, SimulatorComponent, HttpClientModule],
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],

})
export class PlaygroundComponent implements OnInit {
  isLoading: boolean = false
  responseGPT: any;
  searchGTP: any
  editor!: Editor;
  html$ = ``;
  fixTentative = '';
  toolbar: any = [
    // default value
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    // or, set options for link:
    //[{ link: { showOpenInNewTab: false } }, 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['horizontal_rule', 'format_clear', 'indent', 'outdent'],
    ['superscript', 'subscript'],
    ['undo', 'redo'],
  ];
  @ViewChild('codeBlock') codeBlock!: ElementRef;
  constructor(private openaiService: OpenaiService) { }

  ngAfterViewInit() {
    hljs.highlightBlock(this.codeBlock.nativeElement);

  }


  get html(): string {
    return this.html$;
  }
  set html(html: string) {
    this.html$ = html;
    this.fixTentative = html.replace(/<p><\/p>/ig, '<p><br><\/p>');
  }

  ngOnInit(): void {
    this.editor = new Editor({
      content: '',
      plugins: [],
      nodeViews: {},
      history: true,
      keyboardShortcuts: true,
      inputRules: true,
    });
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  sendMessage(): void {
    this.isLoading = true
    const userMessage = `${this.searchGTP} สร้าง html tag ให้ฉันสำหรับสร้างหน้าเว็บ landing page`; // ตัวอย่างข้อความที่ผู้ใช้ส่ง
    this.openaiService.sendMessage(userMessage).subscribe({
      next: (res) => {
        const filterHTML = this.extractHtmlContent(res.choices[0].message.content)
        this.responseGPT = `<!DOCTYPE html>  ${filterHTML}`; // รับข้อความตอบกลับ
        this.html$ = `<!DOCTYPE html>  ${filterHTML}`; // รับข้อความตอบกลับ
        this.isLoading = false
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  extractHtmlContent(htmlString: any) {
    // ใช้ Regular Expression เพื่อดึงเนื้อหาที่เริ่มจาก <html> และสิ้นสุดที่ </html>
    const regex = /<html[\s\S]*<\/html>/g;
    const match = htmlString.match(regex);

    // ถ้าพบตรงกับเงื่อนไขให้คืนค่าผลลัพธ์
    return match ? match[0].trim() : null; // คืนค่า null หากไม่พบ
  }

}
