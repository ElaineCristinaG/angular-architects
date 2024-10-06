import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksCatalogComponent } from './books-catalog.component'
import { RouterModule } from '@angular/router';
import { EditBookComponent } from './edit-book/edit-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from '../shared/componets/feedback/feedback.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    BooksCatalogComponent,
    EditBookComponent,
    FeedbackComponent,
    BookingComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',
        component: BooksCatalogComponent
      }
    ])
  ]
})
export class BooksCatalogModule { }
