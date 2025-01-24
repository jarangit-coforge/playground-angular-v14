import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import hljs from 'highlight.js';
import { Editor, toHTML, Toolbar, Validators } from 'ngx-editor';
import { ShareCommonModule } from 'src/app/common/common.module';

@Component({
  standalone: true, imports: [ShareCommonModule],
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],

})
export class PlaygroundComponent implements OnInit {
  editor!: Editor;
  html$ = '';
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

  ngAfterViewInit() {
    hljs.highlightBlock(this.codeBlock.nativeElement);

  }


  get html(): string {
    return this.html$;
  }
  set html(html: string) {
    console.log("🚀 ~ PlaygroundComponent ~ sethtml ~ html:", html)
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

}
