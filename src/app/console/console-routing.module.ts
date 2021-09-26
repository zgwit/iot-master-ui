import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogoutGuard} from "../admin/logout.guard";
import {ConsoleComponent} from "./console.component";

import {ProjectComponent} from "./project/project.component";
import {DeviceComponent} from "./device/device.component";
import {UserComponent} from "./user/user.component";
import {PasswordComponent} from "./password/password.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {UnknownComponent} from "./unknown/unknown.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {DeviceDetailComponent} from "./device-detail/device-detail.component";
import {DeviceValueComponent} from "./device-value/device-value.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {AlarmAllComponent} from "./alarm-all/alarm-all.component";
import {VoiceAllComponent} from "./voice-all/voice-all.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {GroupComponent} from "./group/group.component";
import {GroupEditComponent} from "./group-edit/group-edit.component";
import {GroupDetailComponent} from "./group-detail/group-detail.component";
import {JobEditComponent} from "./job-edit/job-edit.component";
import {SubscribeAllComponent} from "./subscribe-all/subscribe-all.component";
import {SubscribeEditComponent} from "./subscribe-edit/subscribe-edit.component";

const routes: Routes = [
  {
    path: '',
    component: ConsoleComponent,
    children: [
      {path: '', component: WelcomeComponent},
      {path: 'project', component: ProjectComponent},
      {path: 'project/detail/:id', component: ProjectDetailComponent},
      {path: 'device', component: DeviceComponent},
      {path: 'device/detail/:id', component: DeviceDetailComponent},
      {path: 'device/value/:id/:name', component: DeviceValueComponent},
      {path: 'alarm', component: AlarmAllComponent},
      {path: 'voice', component: VoiceAllComponent},
      {path: 'user', component: UserComponent},
      {path: 'user/edit/:id', component: UserEditComponent},
      {path: 'user/detail/:id', component: UserDetailComponent},
      {path: 'group', component: GroupComponent},
      {path: 'group/create', component: GroupEditComponent},
      {path: 'group/edit/:id', component: GroupEditComponent},
      {path: 'group/detail/:id', component: GroupDetailComponent},
      {path: 'job/create', component: JobEditComponent},
      {path: 'job/edit/:id', component: JobEditComponent},
      {path: 'subscribe', component: SubscribeAllComponent},
      {path: 'subscribe/create', component: SubscribeEditComponent},
      {path: 'subscribe/edit/:id', component: SubscribeEditComponent},
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
export class ConsoleRoutingModule {
}
