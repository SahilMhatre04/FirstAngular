import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Homepage } from './homepage/homepage';
import { AuthGuard } from './auth-guard';
import { Manageusers } from './manageusers/manageusers';

const routes: Routes = [
  {path:'dashboard',component:Dashboard,canActivate:[AuthGuard]},
  {path:'',component:Homepage},
  {path:'manageusers',component:Manageusers,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
