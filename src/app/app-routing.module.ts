import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { WorkerComponent } from './worker/worker.component';
import { WorkertableComponent } from './workertable/workertable.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signin',component:SigninComponent},
  {path:'register',component:RegisterComponent},
  {path:'register/:data',component:RegisterComponent},
  {path:'table',component:TableComponent},
  {path:'table/:data',component:TableComponent},
  {path:'worker',component:WorkerComponent},
  {path:'worker/:data',component:WorkerComponent},
  {path:'workertable',component:WorkertableComponent},
  {path:'workertable/:data',component:WorkertableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
