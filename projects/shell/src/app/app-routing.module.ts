import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path: 'booksCatalog',
    loadChildren: () => import('../../../mfe-books/src/app/books-catalog/books-catalog.module')
    .then(m => m.BooksCatalogModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
