import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoOutPageGuard } from '../guards/go-out-page.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'createAccount', component: CreateAccountComponent, canDeactivate:[GoOutPageGuard]}
]

@NgModule({
  declarations: [
    CreateAccountComponent,
    LoginComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccountModule { }
