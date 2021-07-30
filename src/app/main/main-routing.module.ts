import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {DashComponent} from "./dash/dash.component";
import {AcceptorComponent} from "./acceptor/acceptor.component";
import {TunnelComponent} from "./tunnel/tunnel.component";
import {ProjectComponent} from "./project/project.component";
import {DeviceComponent} from "./device/device.component";
import {TemplateComponent} from "./template/template.component";
import {ElementComponent} from "./element/element.component";
import {UserComponent} from "./user/user.component";
import {GroupComponent} from "./group/group.component";
import {PluginComponent} from "./plugin/plugin.component";
import {AdapterComponent} from "./adapter/adapter.component";
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
import {GroupEditComponent} from "./group-edit/group-edit.component";
import {ApiEditComponent} from "./api-edit/api-edit.component";
import {AcceptorDetailComponent} from "./acceptor-detail/acceptor-detail.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {TunnelDetailComponent} from "./tunnel-detail/tunnel-detail.component";
import {DeviceDetailComponent} from "./device-detail/device-detail.component";
import {TemplateDetailComponent} from "./template-detail/template-detail.component";
import {ElementDetailComponent} from "./element-detail/element-detail.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {GroupDetailComponent} from "./group-detail/group-detail.component";
import {PluginDetailComponent} from "./plugin-detail/plugin-detail.component";
import {AdapterDetailComponent} from "./adapter-detail/adapter-detail.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'dash'},
      {path: 'dash', component: DashComponent},
      {path: 'tunnel', component: TunnelComponent},
      // {path: 'tunnel-edit', component: TunnelEditComponent},
      {path: 'tunnel/edit/:id', component: TunnelEditComponent},
      {path: 'tunnel/detail/:id', component: TunnelDetailComponent},
      {path: 'acceptor', component: AcceptorComponent},
      {path: 'acceptor/create', component: AcceptorEditComponent},
      {path: 'acceptor/edit/:id', component: AcceptorEditComponent},
      {path: 'acceptor/detail/:id', component: AcceptorDetailComponent},
      {path: 'project', component: ProjectComponent},
      {path: 'project/create', component: ProjectEditComponent},
      {path: 'project/edit/:id', component: ProjectEditComponent},
      {path: 'project/detail/:id', component: ProjectDetailComponent},
      {path: 'device', component: DeviceComponent},
      {path: 'device/create', component: DeviceEditComponent},
      {path: 'device/edit/:id', component: DeviceEditComponent},
      {path: 'device/detail/:id', component: DeviceDetailComponent},
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
      {path: 'group', component: GroupComponent},
      {path: 'group/create', component: GroupEditComponent},
      {path: 'group/edit/:id', component: GroupEditComponent},
      {path: 'group/detail/:id', component: GroupDetailComponent},
      {path: 'plugin', component: PluginComponent},
      {path: 'plugin/detail/:id', component: PluginDetailComponent},
      {path: 'adapter', component: AdapterComponent},
      {path: 'adapter/detail/:id', component: AdapterDetailComponent},
      {path: 'api', component: ApiComponent},
      {path: 'setting', component: SettingComponent},
      {path: 'password', component: PasswordComponent},

      {path: '**', redirectTo: 'dash'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
