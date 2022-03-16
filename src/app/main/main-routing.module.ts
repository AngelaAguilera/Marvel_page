import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { HomeComponent } from './home/home.component';

import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent, children:[
    { path: 'home', component: HomeComponent },
    { path: 'comics', component: ComicsComponent }
   ] },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
