import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksCatalogComponent } from './books-catalog/books-catalog.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path:'booksCatalog',
    component: BooksCatalogComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
