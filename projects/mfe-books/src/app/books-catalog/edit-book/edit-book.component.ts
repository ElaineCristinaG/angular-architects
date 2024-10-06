import { Component, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { Book } from '../../model/books';
import { OrchestratorService } from '../../../../../shell/src/app/services/orchestrator/orchestrator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { BookService } from '../../services/book.service';
import { ServiceResponseMessages } from '../../../../../shell/src/app/models/enum';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent {


  book: Book = { author: '', country: '', imageLink: '', language: '', link: '', pages: 0, title: '', year: 0, id: '' };
  public form: FormGroup;
  public feedback: WritableSignal<string> = signal(ServiceResponseMessages.CREATE_SUCCESS);
  public descriptionError: WritableSignal<string> = signal('');
  public typeForm: string = '';

  constructor(
    public orcService: OrchestratorService,
    private fb: FormBuilder,
    private bookService: BookService
  ){
    effect(() => {
      this.book = this.orcService.book();
      this.startForm();

     },{ allowSignalWrites: true})

    this.form = this.fb.group({
      title:    ['', [Validators.required]],
      author:   ['', [Validators.required]],
      link:     ['', [Validators.required]],
      country:  ['', [Validators.required]],
      pages:    ['', [Validators.required]],
      year:     ['', [Validators.required]],
      language: ['', [Validators.required]],
      });

  }

  private startForm(){
      this.form.patchValue({
          title:    this.book.title,
          author:   this.book.author,
          link:     this.book.link,
          country:  this.book.country,
          pages:    this.book.pages,
          year:     this.book.year,
          language: this.book.language,
        });
      this.clearAll();  
  }

  public onSubmit(){
    
    console.log('submit')

    const book: Book = {
      title: this.form.get('title')?.value,
      author: this.form.get('author')?.value,
      link: this.form.get('link')?.value,
      imageLink: this.book.imageLink, //not editabled
      country: this.form.get('country')?.value,
      pages: this.form.get('pages')?.value,
      year: this.form.get('year')?.value,
      language: this.form.get('language')?.value,
      id: this.book.id,
    }

    const bookObserver: Observer<any> = {
      next: (response) => {
        this.feedback.set(ServiceResponseMessages.EDIT_SUCCESS);
      },
      error: (error) => {
        this.feedback.set(ServiceResponseMessages.ERROR);
        if (error.error && error.error.message) {
          this.descriptionError.set(error.error.message);
        } else {
          this.descriptionError.set(ServiceResponseMessages.ERROR);
        }
      },
      complete: () => {
        console.log('Request completed.');
      }
    };

    this.bookService.update(book.id, book).subscribe(bookObserver);
    
  }

  private clearAll(){
   this.feedback.set('');
  }

  
}
