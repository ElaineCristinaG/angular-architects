import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksCatalogComponent } from './books-catalog.component'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BooksCatalogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ]
})
export class BooksCatalogModule { }
