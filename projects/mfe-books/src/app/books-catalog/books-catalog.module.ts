import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksCatalogComponent } from './books-catalog.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BooksCatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: BooksCatalogComponent
      },
    ])
  ]
})
export class BooksCatalogModule { }
