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
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'dash'},
      {path: 'edit', component: EditComponent},
      {path: 'dash', component: DashComponent},
      {path: 'tunnel', component: TunnelComponent},
      {path: 'acceptor', component: AcceptorComponent},
      {path: 'acceptor-edit', component: AcceptorEditComponent},
      {path: 'acceptor-edit/:id', component: AcceptorEditComponent},
      {path: 'project', component: ProjectComponent},
      {path: 'device', component: DeviceComponent},
      {path: 'template', component: TemplateComponent},
      {path: 'element', component: ElementComponent},
      {path: 'user', component: UserComponent},
      {path: 'group', component: GroupComponent},
      {path: 'plugin', component: PluginComponent},
      {path: 'adapter', component: AdapterComponent},
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
