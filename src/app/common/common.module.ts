import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // นำเข้า CommonModule
import { FormsModule } from '@angular/forms'; // นำเข้า FormsModule ถ้าจำเป็น
import { ReactiveFormsModule } from '@angular/forms'; // ถ้าจำเป็น
import { NgxEditorModule } from 'ngx-editor';
import { MapsModule } from '@syncfusion/ej2-angular-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MapsModule
    // นำเข้าโมดูลอื่นๆ ที่ต้องการ
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MapsModule
    // ส่งออกโมดูลอื่นๆ ที่ต้องการให้ใช้ใน component
  ]
})
export class ShareCommonModule { }
