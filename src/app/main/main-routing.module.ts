import { FunkoDetailComponent } from './funko-detail/funko-detail.component';
import { FunkosComponent } from './funkos/funkos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccessGuard } from '../guards/user-access.guard';
import { CartComponent } from './cart/cart.component';
import { ComicsComponent } from './comics/comics.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent, children:[
    { path: 'home', component: HomeComponent },
    { path: 'comics', component: ComicsComponent },
    { path: 'funkos', component: FunkosComponent },
    { path: 'funkos/detail/:id', component: FunkoDetailComponent},
    { path: 'comics/detail/:id', component: DetailComponent},
    { path: 'cart', component: CartComponent, canActivate:[UserAccessGuard]}
   ] },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
