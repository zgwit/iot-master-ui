import {NgModule} from '@angular/core';

import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AdminRoutingModule} from './admin-routing.module';

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
import {HelperModule} from "../helper/helper.module";
import {AdminComponent} from "./admin.component";
import {DashComponent} from "./dash/dash.component";
import {TunnelComponent} from "./tunnel/tunnel.component";
import {TunnelEditComponent} from "./tunnel-edit/tunnel-edit.component";
import {CompanyEditComponent} from "./company-edit/company-edit.component";
import {ProjectComponent} from "./project/project.component";
import {ProtocolComponent} from "./protocol/protocol.component";
import {SettingComponent} from "./setting/setting.component";
import {PasswordComponent} from "./password/password.component";
import {TunnelMonitorComponent} from "./tunnel-monitor/tunnel-monitor.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {DeviceDetailComponent} from "./device-detail/device-detail.component";
import {ElementComponent} from "./element/element.component";
import {DeviceComponent} from "./device/device.component";
import {CompanyComponent} from "./company/company.component";
import {TemplateEditComponent} from "./template-edit/template-edit.component";
import {TemplateDetailComponent} from "./template-detail/template-detail.component";
import {ElementEditComponent} from "./element-edit/element-edit.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {TunnelDetailComponent} from "./tunnel-detail/tunnel-detail.component";
import {ProtocolDetailComponent} from "./protocol-detail/protocol-detail.component";
import {ProjectEditComponent} from "./project-edit/project-edit.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {AcceptorComponent} from "./acceptor/acceptor.component";
import {PluginDetailComponent} from "./plugin-detail/plugin-detail.component";
import {ApiComponent} from "./api/api.component";
import {DeviceEditComponent} from "./device-edit/device-edit.component";
import {UserComponent} from "./user/user.component";
import {ElementDetailComponent} from "./element-detail/element-detail.component";
import {PluginComponent} from "./plugin/plugin.component";
import {AcceptorEditComponent} from "./acceptor-edit/acceptor-edit.component";
import {AcceptorDetailComponent} from "./acceptor-detail/acceptor-detail.component";
import {TemplateComponent} from "./template/template.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {AcceptorEditDevicesComponent} from "./acceptor-edit-devices/acceptor-edit-devices.component";
import {ProjectEditVariablesComponent} from "./project-edit-variables/project-edit-variables.component";
import {ProjectEditDevicesComponent} from "./project-edit-devices/project-edit-devices.component";
import {ProjectEditStrategiesComponent} from "./project-edit-strategies/project-edit-strategies.component";
import {TemplateEditDevicesComponent} from "./template-edit-devices/template-edit-devices.component";
import {ElementEditVariablesComponent} from "./element-edit-variables/element-edit-variables.component";
import {ElementEditCommandsComponent} from "./element-edit-commands/element-edit-commands.component";
import {ElementEditCollectorsComponent} from "./element-edit-collectors/element-edit-collectors.component";
import {NzTimePickerModule} from "ng-zorro-antd/time-picker";
import {ProjectEditCommandsComponent} from "./project-edit-commands/project-edit-commands.component";
import {EventComponent} from "./event/event.component";
import {AcceptorTunnelComponent} from "./acceptor-tunnel/acceptor-tunnel.component";
import {TunnelDeviceComponent} from "./tunnel-device/tunnel-device.component";
import {ElementDeviceComponent} from "./element-device/element-device.component";
import {TemplateProjectComponent} from "./template-project/template-project.component";
import {DeviceProjectComponent} from "./device-project/device-project.component";
import {ElementTemplateComponent} from "./element-template/element-template.component";
import {DashModule} from "../dash/dash.module";
import {ProjectEditScriptsComponent} from "./project-edit-scripts/project-edit-scripts.component";
import {UserCompanyComponent} from "./user-company/user-company.component";
import {CompanyUserComponent} from "./company-user/company-user.component";
import {CompanyBrowserComponent} from "./company-browser/company-browser.component";
import {ChooseService} from "./choose.service";
import {UserBrowserComponent} from "./user-browser/user-browser.component";
import {DeviceBrowserComponent} from "./device-browser/device-browser.component";
import {TemplateBrowserComponent} from "./template-browser/template-browser.component";
import {ElementBrowserComponent} from "./element-browser/element-browser.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {ChooseDeviceComponent} from "./choose-device/choose-device.component";
import {ChooseElementComponent} from "./choose-element/choose-element.component";
import {ChooseTemplateComponent} from "./choose-template/choose-template.component";
import {CompanyGroupComponent} from "./company-group/company-group.component";
import {CompanyProjectComponent} from "./company-project/company-project.component";
import {GroupDetailComponent} from "./group-detail/group-detail.component";
import {GroupEditComponent} from "./group-edit/group-edit.component";
import {GroupProjectComponent} from "./group-project/group-project.component";
import {ElementEditValidatorsComponent} from "./element-edit-validators/element-edit-validators.component";
import {ProjectEditValidatorsComponent} from "./project-edit-validators/project-edit-validators.component";
import {JobComponent} from "./job/job.component";
import {JobEditComponent} from "./job-edit/job-edit.component";
import {ChooseUserComponent} from "./choose-user/choose-user.component";
import {ChooseGroupComponent} from "./choose-group/choose-group.component";
import {ChooseCompanyComponent} from "./choose-company/choose-company.component";
import {GroupBrowserComponent} from "./group-browser/group-browser.component";
import {ProjectBrowserComponent} from "./project-browser/project-browser.component";
import {AlarmComponent} from "./alarm/alarm.component";
import {SubscribeComponent} from "./subscribe/subscribe.component";
import {SubscribeEditComponent} from "./subscribe-edit/subscribe-edit.component";
import {ChooseTunnelComponent} from "./choose-tunnel/choose-tunnel.component";
import {TunnelBrowserComponent} from "./tunnel-browser/tunnel-browser.component";
import {PromptComponent} from "./prompt/prompt.component";
import {ProjectEditJobsComponent} from "./project-edit-jobs/project-edit-jobs.component";
import {ElementEditScriptsComponent} from "./element-edit-scripts/element-edit-scripts.component";
import {CompanyTunnelComponent} from "./company-tunnel/company-tunnel.component";
import {CompanyDeviceComponent} from "./company-device/company-device.component";
import {ElementEditDataPointsComponent} from "./element-edit-data-points/element-edit-data-points.component";
import {NgxEchartsModule} from "ngx-echarts";
import {NzGridModule} from "ng-zorro-antd/grid";
import {DeviceValueComponent} from "./device-value/device-value.component";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NgxAmapModule} from "ngx-amap";
import {TunnelMapComponent} from "./tunnel-map/tunnel-map.component";
import {ProjectMapComponent} from "./project-map/project-map.component";
import {DeviceMapComponent} from "./device-map/device-map.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {UnknownComponent} from "./unknown/unknown.component";
// import {NgxEchartsModule} from 'ngx-echarts';
//import * as echarts from 'echarts';


@NgModule({
  declarations: [
    AdminComponent,
    WelcomeComponent,
    UnknownComponent,

    DashComponent,
    TunnelComponent, TunnelEditComponent, TunnelDetailComponent, TunnelMonitorComponent,
    TunnelDeviceComponent, TunnelBrowserComponent,

    AcceptorComponent, AcceptorDetailComponent,
    AcceptorEditComponent, AcceptorEditDevicesComponent, AcceptorTunnelComponent,

    ProjectComponent, ProjectDetailComponent,
    ProjectEditComponent, ProjectEditCommandsComponent, ProjectEditJobsComponent,
    ProjectEditVariablesComponent, ProjectEditDevicesComponent, ProjectEditStrategiesComponent,
    ProjectEditValidatorsComponent, ProjectEditScriptsComponent, ProjectBrowserComponent,

    GroupDetailComponent, GroupEditComponent, GroupProjectComponent, GroupBrowserComponent,

    DeviceComponent, DeviceDetailComponent, DeviceEditComponent,
    DeviceProjectComponent, DeviceBrowserComponent, ElementEditValidatorsComponent,
    DeviceValueComponent,

    TemplateComponent, TemplateDetailComponent,
    TemplateEditComponent, TemplateEditDevicesComponent,
    TemplateProjectComponent, TemplateBrowserComponent,

    ElementBrowserComponent,
    ElementDeviceComponent, ElementTemplateComponent,
    ElementComponent, ElementDetailComponent,
    ElementEditComponent, ElementEditVariablesComponent,
    ElementEditCommandsComponent, ElementEditCollectorsComponent, ElementEditScriptsComponent,

    UserComponent, UserEditComponent, UserDetailComponent, UserCompanyComponent,
    UserBrowserComponent,

    CompanyComponent, CompanyEditComponent, CompanyDetailComponent, CompanyProjectComponent,
    CompanyGroupComponent, CompanyBrowserComponent,
    CompanyUserComponent,

    JobComponent,
    JobEditComponent,

    PluginComponent, PluginDetailComponent,
    ProtocolComponent, ProtocolDetailComponent,

    ApiComponent,
    SettingComponent,

    PasswordComponent, EventComponent,

    PromptComponent,

    ChooseDeviceComponent, ChooseElementComponent, ChooseTemplateComponent,
    ChooseUserComponent, ChooseGroupComponent, ChooseCompanyComponent, ChooseTunnelComponent,

    AlarmComponent, SubscribeComponent, SubscribeEditComponent, CompanyTunnelComponent, CompanyDeviceComponent, ElementEditDataPointsComponent,

    TunnelMapComponent, ProjectMapComponent, DeviceMapComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule,
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
    // NgxEchartsModule.forRoot({echarts}),
    NzTransferModule,
    NzRadioModule,
    NzProgressModule,
    NzCardModule,
    NzUploadModule,
    HelperModule,
    NzDropDownModule,
    NzTimePickerModule,
    DashModule,
    DragDropModule,

    NgxEchartsModule.forRoot({echarts: () => import('echarts')}),
    NgxAmapModule.forRoot({apiKey: 'e4c1bd11fe1b25d77dae4cf3993f7034', debug: true}),
    NzDatePickerModule
  ],
  bootstrap: [AdminComponent],
  providers: [ChooseService]
})
export class AdminModule {
}
