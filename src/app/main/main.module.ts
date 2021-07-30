import {NgModule} from '@angular/core';

import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MainRoutingModule} from './main-routing.module';

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
// import {NgxEchartsModule} from 'ngx-echarts';
// import * as echarts from 'echarts';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {HelperModule} from "../helper/helper.module";
import {MainComponent} from "./main.component";
import {DashComponent} from "./dash/dash.component";
import {TunnelComponent} from "./tunnel/tunnel.component";
import {TunnelEditComponent} from "./tunnel-edit/tunnel-edit.component";
import {GroupEditComponent} from "./group-edit/group-edit.component";
import {ProjectComponent} from "./project/project.component";
import {AdapterComponent} from "./adapter/adapter.component";
import {SettingComponent} from "./setting/setting.component";
import {PasswordComponent} from "./password/password.component";
import {TunnelMonitorComponent} from "./tunnel-monitor/tunnel-monitor.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {DeviceDetailComponent} from "./device-detail/device-detail.component";
import {ElementComponent} from "./element/element.component";
import {DeviceComponent} from "./device/device.component";
import {GroupComponent} from "./group/group.component";
import {TemplateEditComponent} from "./template-edit/template-edit.component";
import {TemplateDetailComponent} from "./template-detail/template-detail.component";
import {ElementEditComponent} from "./element-edit/element-edit.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {TunnelDetailComponent} from "./tunnel-detail/tunnel-detail.component";
import {AdapterDetailComponent} from "./adapter-detail/adapter-detail.component";
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
import {GroupDetailComponent} from "./group-detail/group-detail.component";


@NgModule({
  declarations: [
    MainComponent,
    DashComponent,
    TunnelComponent, TunnelEditComponent, TunnelDetailComponent, TunnelMonitorComponent,
    AcceptorComponent, AcceptorEditComponent, AcceptorDetailComponent,
    ProjectComponent, ProjectEditComponent, ProjectDetailComponent,
    DeviceComponent, DeviceEditComponent, DeviceDetailComponent,
    TemplateComponent, TemplateEditComponent, TemplateDetailComponent,
    ElementComponent, ElementEditComponent, ElementDetailComponent,
    UserComponent, UserEditComponent, UserDetailComponent,
    GroupComponent, GroupEditComponent, GroupDetailComponent,
    PluginComponent, PluginDetailComponent,
    AdapterComponent, AdapterDetailComponent,
    ApiComponent,
    SettingComponent,
    PasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainRoutingModule,
    IconsProviderModule,
    NzIconModule,
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
  ],
  bootstrap: [MainComponent]
})
export class MainModule {
}
