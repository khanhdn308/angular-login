import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth.guard';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent, data: {requireLogin: true}},
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'task', component: TaskComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
