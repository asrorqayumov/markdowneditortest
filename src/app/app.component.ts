import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxEditorModule } from 'ngx-editor';
import { EditorComponent } from "./components/editor/editor.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxEditorModule, EditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'markdowneditor';
  
}
