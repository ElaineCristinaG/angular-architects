import { Component, signal, WritableSignal } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/books';
import { OrchestratorService } from '../../../../shell/src/app/services/orchestrator/orchestrator.service';
import { Router } from '@angular/router';
import { Profile } from '../../../../shell/src/app/models/login';

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

  public booksList: Book[] = [];
  public booksFiltered: WritableSignal<Book[]> = signal([]);
  public booksReserved: Book[] = []; 

  constructor(
    private bookService: BookService,
    public orcService: OrchestratorService,
    private router: Router,
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
    this.booksList = [];
    this.bookService.getAll().subscribe(books => {
      if(books.length > 0){
        this.booksList = books
        this.booksFiltered.set(books);
      }else{
        console.log('Has not Books')
      }
    })
  }

  public createBook(){
   this.orcService.openModal.set(true);
        // this.bookService.create(book).subscribe(resp =>{
        //   console.log(resp)
        // })
    }

  public editBook(book: Book){
    this.orcService.book.set(book);
    this.orcService.openModal.set(true);
  }

  public deleteBook(event: Book){
    this.bookService.delete(event.id).subscribe(resp => {
      console.log('Book deleted Success')
    })

  }

  public booking(book: Book){
    this.booksReserved.push(book);
  }

  public filter(event: any){
    console.log('filtrar')
    const searchTerm = event.target.value.toLowerCase();
    this.booksList = this.booksFiltered().filter(
        card =>
        card.title.toLowerCase().includes(searchTerm) 
        //||
        // card.author.toLowerCase().includes(searchTerm) ||
        // card.country.toLowerCase().includes(searchTerm)
    )
    
  }

}
