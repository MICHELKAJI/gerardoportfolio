import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    ContactComponent
  ],
  providers: []
})
export class AppModule { } 