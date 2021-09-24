import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzStatisticModule} from 'ng-zorro-antd/statistic';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzTransferModule} from 'ng-zorro-antd/transfer';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzTimePickerModule} from "ng-zorro-antd/time-picker";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";

import {NgxEchartsModule} from "ngx-echarts";
import {HelperModule} from "../helper/helper.module";

import {ConsoleRoutingModule} from './console-routing.module';
import {WelcomeComponent} from "./welcome/welcome.component";
import {UnknownComponent} from "./unknown/unknown.component";
import {ConsoleComponent} from "./console.component";
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [
    ConsoleComponent,
    WelcomeComponent,
    UnknownComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConsoleRoutingModule,
    IconsProviderModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    NzTableModule,
    NzModalModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule,
    NzSwitchModule,
    NzPopconfirmModule,
    NzDividerModule,
    NzDrawerModule,
    NzSelectModule,
    NzSpaceModule,
    NzInputNumberModule,
    NzStatisticModule,
    NzTabsModule,
    NzCollapseModule,
    NzTransferModule,
    NzRadioModule,
    NzProgressModule,
    NzCardModule,
    NzUploadModule,
    HelperModule,
    NzDropDownModule,
    NzTimePickerModule,
    NzDatePickerModule,
    DragDropModule,

    NgxEchartsModule.forRoot({echarts: () => import('echarts')}),

  ],
  bootstrap: [ConsoleComponent],
  providers: []
})
export class ConsoleModule { }
