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
import {NzIconModule} from "ng-zorro-antd/icon";
import {TabsComponent} from "./tabs/tabs.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    TabsComponent,
    EditorComponent,
    JsEditorComponent,
    YamlEditorComponent,
    JsonEditorComponent
  ],
  exports: [
    TabsComponent,
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
    NzButtonModule,
    NzIconModule,
    RouterModule
  ]
})
export class HelperModule {
}
