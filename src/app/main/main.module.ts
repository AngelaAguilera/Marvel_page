import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComicsComponent } from './comics/comics.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ComicsComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
