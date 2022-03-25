import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';

const routes: Routes = [
  {path:'', redirectTo:'/main/home', pathMatch:'full'},
  {path: 'login', loadChildren: () => import("./account/account.module").then(m=>m.AccountModule)},
  {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
