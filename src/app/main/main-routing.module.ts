import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {DashComponent} from "./dash/dash.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'dash'},
      {path: 'dash', component: DashComponent},
      {path: 'welcome', component: WelcomeComponent},


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
