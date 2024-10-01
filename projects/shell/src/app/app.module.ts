import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BooksCatalogComponent } from '../../../mfe-books/src/app/books-catalog/books-catalog.component';
import { RouterModule } from '@angular/router';
import { InitComponent } from './init/init.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InitComponent,
    BooksCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
