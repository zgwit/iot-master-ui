import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConsoleComponent} from "./console.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {UnknownComponent} from "./unknown/unknown.component";
import {LogoutGuard} from "../admin/logout.guard";

const routes: Routes = [
  {
    path: '',
    component: ConsoleComponent,
    children: [
      {path: '', component: WelcomeComponent},
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
