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

import {DragDropModule} from "@angular/cdk/drag-drop";
import {ConsoleRoutingModule} from './console-routing.module';
import {WelcomeComponent} from "./welcome/welcome.component";
import {UnknownComponent} from "./unknown/unknown.component";
import {ConsoleComponent} from "./console.component";
import {ProjectComponent} from "./project/project.component";
import {DeviceComponent} from "./device/device.component";
import {SubscribeComponent} from "./subscribe/subscribe.component";
import {AlarmComponent} from "./alarm/alarm.component";
import {VoiceComponent} from "./voice/voice.component";
import {PasswordComponent} from "./password/password.component";
import {UserComponent} from "./user/user.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {DeviceDetailComponent} from "./device-detail/device-detail.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {DeviceValueComponent} from "./device-value/device-value.component";
import {AlarmAllComponent} from "./alarm-all/alarm-all.component";
import {VoiceAllComponent} from "./voice-all/voice-all.component";
import {SubscribeAllComponent} from "./subscribe-all/subscribe-all.component";
import {SubscribeEditComponent} from "./subscribe-edit/subscribe-edit.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {GroupProjectComponent} from "./group-project/group-project.component";
import {GroupComponent} from "./group/group.component";
import {GroupDetailComponent} from "./group-detail/group-detail.component";
import {GroupEditComponent} from "./group-edit/group-edit.component";
import {EventComponent} from "./event/event.component";
import {JobComponent} from "./job/job.component";
import {JobEditComponent} from "./job-edit/job-edit.component";
import {ChooseService} from "./choose.service";
import {ChooseDeviceComponent} from "./choose-device/choose-device.component";
import {ChooseGroupComponent} from "./choose-group/choose-group.component";
import {ChooseUserComponent} from "./choose-user/choose-user.component";
import {DeviceBrowserComponent} from "./device-browser/device-browser.component";
import {GroupBrowserComponent} from "./group-browser/group-browser.component";
import {UserBrowserComponent} from "./user-browser/user-browser.component";
import {DeviceProjectComponent} from "./device-project/device-project.component";
import {ProjectBrowserComponent} from "./project-browser/project-browser.component";
import {PromptComponent} from "./prompt/prompt.component";



@NgModule({
  declarations: [
    ConsoleComponent,
    WelcomeComponent,
    UnknownComponent,
    EventComponent,
    ProjectComponent,
    ProjectDetailComponent,
    DeviceComponent,
    DeviceDetailComponent,
    DeviceValueComponent,
    DeviceProjectComponent,
    JobComponent,
    JobEditComponent,
    SubscribeComponent,
    SubscribeAllComponent,
    SubscribeEditComponent,
    AlarmComponent,
    AlarmAllComponent,
    VoiceComponent,
    VoiceAllComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    GroupComponent,
    GroupDetailComponent,
    GroupEditComponent,
    GroupProjectComponent,
    PasswordComponent,

    ChooseDeviceComponent,
    ChooseGroupComponent,
    ChooseUserComponent,

    ProjectBrowserComponent,
    DeviceBrowserComponent,
    GroupBrowserComponent,
    UserBrowserComponent,

    PromptComponent,
    EventComponent,
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
    NzDropDownModule,
    NzTimePickerModule,
    NzDatePickerModule,
    DragDropModule,

    HelperModule,

    NgxEchartsModule.forRoot({echarts: () => import('echarts')}),
  ],
  bootstrap: [ConsoleComponent],
  providers: [ChooseService]
})
export class ConsoleModule { }
