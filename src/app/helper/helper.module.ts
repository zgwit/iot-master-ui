import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzButtonModule} from "ng-zorro-antd/button";
import {PageEditorComponent} from './page-editor/page-editor.component';
import {JsEditorComponent} from './js-editor/js-editor.component';
import {YamlEditorComponent} from './yaml-editor/yaml-editor.component';
import {JsonEditorComponent} from './json-editor/json-editor.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {TabsComponent} from "./tabs/tabs.component";
import {RouterModule} from "@angular/router";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {PageListComponent} from './page-list/page-list.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {ObjectIdToDatePipe} from './object-id-to-date.pipe';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MinuteToDatePipe} from './minute-to-date.pipe';
import {MinuteTimePickerComponent} from './minute-time-picker/minute-time-picker.component';
import {NzTimePickerModule} from "ng-zorro-antd/time-picker";
import {InputScriptComponent} from './input-script/input-script.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import {ObjectIdToDateStringPipe} from './object-id-to-date-string.pipe';
import {DateStringPipe} from './date-string.pipe';
import {ConfigEditorComponent} from './config-editor/config-editor.component';
import {NzRadioModule} from "ng-zorro-antd/radio";
import { ConfigViewerComponent } from './config-viewer/config-viewer.component';
import { ViewConfigDirective } from './view-config.directive';
import { InputYamlComponent } from './input-yaml/input-yaml.component';
import { YamlPipe } from './yaml.pipe';
import { GpsPickerComponent } from './gps-picker/gps-picker.component';
import { InputGpsComponent } from './input-gps/input-gps.component';
import {NgxAmapModule} from "ngx-amap";


@NgModule({
  declarations: [
    TabsComponent,
    PageEditorComponent,
    JsEditorComponent,
    YamlEditorComponent,
    JsonEditorComponent,
    PageListComponent,
    ObjectIdToDatePipe,
    ObjectIdToDateStringPipe,
    DateStringPipe,
    ToolbarComponent,
    MinuteToDatePipe,
    MinuteTimePickerComponent,
    InputScriptComponent,
    ConfigEditorComponent,
    ConfigViewerComponent,
    ViewConfigDirective,
    InputYamlComponent,
    YamlPipe,
    GpsPickerComponent,
    InputGpsComponent,
  ],
    exports: [
        TabsComponent,
        PageEditorComponent,
        JsEditorComponent,
        YamlEditorComponent,
        JsonEditorComponent,
        ConfigEditorComponent,
        PageListComponent,
        ToolbarComponent,
        ObjectIdToDatePipe,
        ObjectIdToDateStringPipe,
        DateStringPipe,
        MinuteToDatePipe,
        MinuteTimePickerComponent,
        InputScriptComponent,
        ViewConfigDirective,
        InputYamlComponent,
        YamlPipe,
        GpsPickerComponent,
        InputGpsComponent,
    ],
    imports: [
        CommonModule,
        CodemirrorModule,
        FormsModule,
        NzTabsModule,
        NzButtonModule,
        NzIconModule,
        RouterModule,
        NzSpaceModule,
        NzInputModule,
        NzTimePickerModule,
        NzModalModule,
        NzRadioModule,
        NgxAmapModule
    ],
  providers: []
})
export class HelperModule {
}
