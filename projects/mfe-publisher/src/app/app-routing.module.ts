import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublisherListComponent } from './publisher-list/publisher-list.component';

const routes: Routes = [

  {
    path:'publisher',
    component: PublisherListComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
