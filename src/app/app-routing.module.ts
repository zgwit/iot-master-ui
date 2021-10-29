import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { SelectCompanyComponent } from './select-company/select-company.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/admin'},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'select-company', pathMatch: 'full', component: SelectCompanyComponent},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'console', loadChildren: () => import('./console/console.module').then(m => m.ConsoleModule)},
  //{path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
