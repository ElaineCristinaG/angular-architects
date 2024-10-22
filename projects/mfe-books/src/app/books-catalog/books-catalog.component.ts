import { Component, signal, WritableSignal } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/books';
import { OrchestratorService } from '../../../../shell/src/app/services/orchestrator/orchestrator.service';
import { Profile } from '../../../../shell/src/app/models/interfaces';
import { Observer } from 'rxjs';
import { ServiceResponseMessages } from '../../../../shell/src/app/models/enum';

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrl: './books-catalog.component.scss'
})
export class BooksCatalogComponent {


  public book: Book = {
    author: "",
    country: "",
    imageLink: "",
    language: "",
    link: "",
    pages: 0,
    title: "",
    year: 0,
    id: "",
  };

  public booksList: WritableSignal<Book[]> = signal([]);
  public booksFiltered: WritableSignal<Book[]> = signal([]);
  public booksReserved: Book[] = []; 

  constructor(
    private bookService: BookService,
    public orcService: OrchestratorService,
  ){ 
      this.getBooks();
      this.startBooksCatalog()
    
    }

  startBooksCatalog(){
   
    this.orcService.openModal.set(false);
    this.orcService.openfeedback.set(false);
    let user = localStorage.getItem('user');
        if(user)
        try{
          const parseUser = JSON.parse(user);
          let profile: Profile  = {
            name: parseUser.name, email: parseUser.email, password: parseUser.password
          }
          this.orcService.user.set(profile);
          console.log(this.orcService.user())
      }catch (error) {
        console.error('Erro ao parsear o JSON do localStorage:', error);
      }
  }

  private getBooks(){
    this.booksList.set([]);
    this.bookService.getAll().subscribe(books => {
      if(books.length > 0){
        this.booksList.set(books);
        this.booksFiltered.set(books);
      }else{
        console.log('Has not Books')
      }
    })
  }

  public editBook(book: Book){
    this.orcService.book.set(book);
    this.orcService.openModal.set(true);
  }

  public deleteBook(event: Book){
    console.log('delte')

    const bookObserver : Observer<any> = {
      next: () => {
         this.booksList.set(this.booksList().filter(book => book.id !== event.id));
         console.log('Book deleted Success');
        //  this.orcService.messageFeed.set('Book deleted Success');
         this.orcService.reload();
      },
      error: (error) => {
        if (error.error && error.error.message) {
          this.orcService.messageFeed.set(ServiceResponseMessages.ERROR)
        } else {
          this.orcService.messageFeed.set(ServiceResponseMessages.ERROR)
        }
      },
      complete: () => {
        console.log('Request completed.');
      }
    }
    this.bookService.delete(event.id).subscribe(bookObserver);
  }

  public booking(book: Book){
    this.booksReserved.push(book);
    console.log(this.booksReserved)
  }

  public filter(event: any){
    const inputValue = event.target.value || ''; 
    const searchTerm = inputValue.toLowerCase();
    this.booksList.set(this.booksFiltered()
    .filter(
      book => book.title.toLowerCase().includes(searchTerm) 
      || book.author.toLowerCase().includes(searchTerm)
    ))
    console.log(this.booksList)
  }

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
  });
}


}
