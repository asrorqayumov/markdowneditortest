import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxEditorModule, Editor } from 'ngx-editor';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Validators, Toolbar } from 'ngx-editor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor',
  imports: [NgxEditorModule, FormsModule, ReactiveFormsModule],
  template: `<form [formGroup]="form">
    <div class="NgxEditor__Wrapper">
      <ngx-editor-menu [editor]="editor" [toolbar]="toolbar"> </ngx-editor-menu>
      <ngx-editor [editor]="editor" formControlName="editorContent">
      </ngx-editor>
    </div>
  </form>`,
  encapsulation: ViewEncapsulation.None,
})
export class EditorComponent implements OnInit {
  html = '';

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
