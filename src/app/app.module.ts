import { getNgModuleById, NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from'@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WorkerComponent } from './worker/worker.component';
import { WorkertableComponent } from './workertable/workertable.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    RegisterComponent,
    TableComponent,
    WorkerComponent,
    WorkertableComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
