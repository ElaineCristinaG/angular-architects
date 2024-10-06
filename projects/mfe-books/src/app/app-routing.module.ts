import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksCatalogComponent } from './books-catalog/books-catalog.component';
import { EditBookComponent } from './books-catalog/edit-book/edit-book.component';

const routes: Routes = [

  {
    path:'booksCatalog',
    component: BooksCatalogComponent
  },
  {
    path:'editBook',
    component: EditBookComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
