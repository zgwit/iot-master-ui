import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzButtonModule} from "ng-zorro-antd/button";
import {EditorComponent} from './editor/editor.component';
import {JsEditorComponent} from './js-editor/js-editor.component';
import {YamlEditorComponent} from './yaml-editor/yaml-editor.component';
import {JsonEditorComponent} from './json-editor/json-editor.component';


@NgModule({
  declarations: [
    EditorComponent,
    JsEditorComponent,
    YamlEditorComponent,
    JsonEditorComponent
  ],
  exports: [
    EditorComponent,
    JsEditorComponent,
    YamlEditorComponent,
    JsonEditorComponent
  ],
  imports: [
    CommonModule,
    CodemirrorModule,
    FormsModule,
    NzTabsModule,
    NzButtonModule
  ]
})
export class HelperModule {
}
