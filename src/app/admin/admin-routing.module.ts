import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {DashComponent} from "./dash/dash.component";
import {AcceptorComponent} from "./acceptor/acceptor.component";
import {TunnelComponent} from "./tunnel/tunnel.component";
import {ProjectComponent} from "./project/project.component";
import {DeviceComponent} from "./device/device.component";
import {TemplateComponent} from "./template/template.component";
import {ElementComponent} from "./element/element.component";
import {UserComponent} from "./user/user.component";
import {CompanyComponent} from "./company/company.component";
import {PluginComponent} from "./plugin/plugin.component";
import {ProtocolComponent} from "./protocol/protocol.component";
import {ApiComponent} from "./api/api.component";
import {SettingComponent} from "./setting/setting.component";
import {PasswordComponent} from "./password/password.component";
import {AcceptorEditComponent} from "./acceptor-edit/acceptor-edit.component";
import {TunnelEditComponent} from "./tunnel-edit/tunnel-edit.component";
import {ProjectEditComponent} from "./project-edit/project-edit.component";
import {DeviceEditComponent} from "./device-edit/device-edit.component";
import {TemplateEditComponent} from "./template-edit/template-edit.component";
import {ElementEditComponent} from "./element-edit/element-edit.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {CompanyEditComponent} from "./company-edit/company-edit.component";
import {AcceptorDetailComponent} from "./acceptor-detail/acceptor-detail.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {TunnelDetailComponent} from "./tunnel-detail/tunnel-detail.component";
import {DeviceDetailComponent} from "./device-detail/device-detail.component";
import {TemplateDetailComponent} from "./template-detail/template-detail.component";
import {ElementDetailComponent} from "./element-detail/element-detail.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {PluginDetailComponent} from "./plugin-detail/plugin-detail.component";
import {ProtocolDetailComponent} from "./protocol-detail/protocol-detail.component";
import {GroupEditComponent} from "./group-edit/group-edit.component";
import {GroupDetailComponent} from "./group-detail/group-detail.component";
import {JobEditComponent} from "./job-edit/job-edit.component";
import {SubscribeEditComponent} from "./subscribe-edit/subscribe-edit.component";
import {DeviceValueComponent} from "./device-value/device-value.component";
import {DeviceMapComponent} from "./device-map/device-map.component";
import {TunnelMapComponent} from "./tunnel-map/tunnel-map.component";
import {ProjectMapComponent} from "./project-map/project-map.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {UnknownComponent} from "./unknown/unknown.component";
import {AlarmAllComponent} from "./alarm-all/alarm-all.component";
import {SubscribeAllComponent} from "./subscribe-all/subscribe-all.component";
import {VoiceAllComponent} from "./voice-all/voice-all.component";
import {DebugComponent} from "./debug/debug.component";
import {ShellComponent} from "./shell/shell.component";
import {LogoutGuard} from "./logout.guard";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: '', component: WelcomeComponent},
      {path: 'dash', component: DashComponent},
      {path: 'tunnel', component: TunnelComponent},
      {path: 'tunnel/edit/:id', component: TunnelEditComponent},
      {path: 'tunnel/detail/:id', component: TunnelDetailComponent},
      {path: 'tunnel/map', component: TunnelMapComponent},
      {path: 'acceptor', component: AcceptorComponent},
      {path: 'acceptor/create', component: AcceptorEditComponent},
      {path: 'acceptor/edit/:id', component: AcceptorEditComponent},
      {path: 'acceptor/detail/:id', component: AcceptorDetailComponent},
      {path: 'project', component: ProjectComponent},
      {path: 'project/create', component: ProjectEditComponent},
      {path: 'project/edit/:id', component: ProjectEditComponent},
      {path: 'project/detail/:id', component: ProjectDetailComponent},
      {path: 'project/map', component: ProjectMapComponent},
      {path: 'device', component: DeviceComponent},
      {path: 'device/create', component: DeviceEditComponent},
      {path: 'device/edit/:id', component: DeviceEditComponent},
      {path: 'device/detail/:id', component: DeviceDetailComponent},
      {path: 'device/value/:id/:name', component: DeviceValueComponent},
      {path: 'device/map', component: DeviceMapComponent},
      {path: 'alarm', component: AlarmAllComponent},
      {path: 'voice', component: VoiceAllComponent},
      {path: 'template', component: TemplateComponent},
      {path: 'template/create', component: TemplateEditComponent},
      {path: 'template/edit/:id', component: TemplateEditComponent},
      {path: 'template/detail/:id', component: TemplateDetailComponent},
      {path: 'element', component: ElementComponent},
      {path: 'element/create', component: ElementEditComponent},
      {path: 'element/edit/:id', component: ElementEditComponent},
      {path: 'element/detail/:id', component: ElementDetailComponent},
      {path: 'user', component: UserComponent},
      {path: 'user/create', component: UserEditComponent},
      {path: 'user/edit/:id', component: UserEditComponent},
      {path: 'user/detail/:id', component: UserDetailComponent},
      {path: 'company', component: CompanyComponent},
      {path: 'company/create', component: CompanyEditComponent},
      {path: 'company/edit/:id', component: CompanyEditComponent},
      {path: 'company/detail/:id', component: CompanyDetailComponent},
      {path: 'group/create', component: GroupEditComponent},
      {path: 'group/edit/:id', component: GroupEditComponent},
      {path: 'group/detail/:id', component: GroupDetailComponent},
      {path: 'job/create', component: JobEditComponent},
      {path: 'job/edit/:id', component: JobEditComponent},
      {path: 'subscribe', component: SubscribeAllComponent},
      {path: 'subscribe/create', component: SubscribeEditComponent},
      {path: 'subscribe/edit/:id', component: SubscribeEditComponent},
      {path: 'plugin', component: PluginComponent},
      {path: 'plugin/detail/:id', component: PluginDetailComponent},
      {path: 'protocol', component: ProtocolComponent},
      {path: 'protocol/detail/:id', component: ProtocolDetailComponent},
      {path: 'api', component: ApiComponent},
      {path: 'setting', component: SettingComponent},
      {path: 'debug', component: DebugComponent},
      {path: 'shell', component: ShellComponent},
      {path: 'password', component: PasswordComponent},
      {
        path: 'logout',
        canActivate: [LogoutGuard],
        //redirectTo: 'login'
      },

      {path: '**', component: UnknownComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
