import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherListComponent } from './publisher-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PublisherListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: PublisherListComponent
      }
    ])
  ]
})
export class PublisherListModule { }
