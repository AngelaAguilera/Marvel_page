import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
=======
import { FooterComponent } from './footer/footer.component';
import { HamburgesaDirective } from './hamburgesa.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComicsComponent,
    HomeComponent,
    CardComponent,
    FooterComponent,
    HamburgesaDirective
>>>>>>> aa3cfb5a2f38864cbd00924432284633769271ae
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
