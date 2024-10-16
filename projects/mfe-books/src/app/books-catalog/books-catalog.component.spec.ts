import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksCatalogComponent } from './books-catalog.component';
import { BookService } from '../services/book.service';
import { OrchestratorService } from '../../../../shell/src/app/services/orchestrator/orchestrator.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Book } from '../model/books';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BooksCatalogComponent', () => {
  let component: BooksCatalogComponent;
  let fixture: ComponentFixture<BooksCatalogComponent>;

  let bookServiceMock: BookService;
  let orcServiceMock: OrchestratorService;

  let bookMock: Book = {
    "author": "Livro Teste4",
    "country": "Teste4",
    "imageLink": "Teste4",
    "language": "teste",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    "pages": 123,
    "title": "Teste",
    "year": 3000,
    "id": "12"
}

let bookListMock = [
 {
    "author": "Livro Teste4",
    "country": "Teste4",
    "imageLink": "Teste4",
    "language": "teste",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    "pages": 123,
    "title": "Teste",
    "year": 3000,
    "id": "12"
},{
    "author": "Livro Teste3",
    "country": "Teste3",
    "imageLink": "Teste3",
    "language": "teste",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    "pages": 123,
    "title": "Teste",
    "year": 3000,
    "id": "11"
}
]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksCatalogComponent],
      providers:[ BookService, OrchestratorService],
      imports:[HttpClientTestingModule ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

   
  });
 beforeEach(() => {
    fixture = TestBed.createComponent(BooksCatalogComponent);
    bookServiceMock = TestBed.inject(BookService);
    orcServiceMock = TestBed.inject(OrchestratorService);
    component = fixture.componentInstance;
    fixture.detectChanges();
 })


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should deleteBook call deleteBook',() => {
  //   component.booksList.set(bookListMock);
  //   spyOn(bookServiceMock,'delete').and.returnValue(of(bookMock));
  //   component.deleteBook(bookMock);
  //   expect(orcServiceMock.messageFeed()).toEqual("Book deleted Success");
  //   expect(orcServiceMock.reload).toHaveBeenCalledTimes(1);  
  //   expect(bookServiceMock.delete).toHaveBeenCalledWith(bookMock.id);
  // });

  

  it ('should be called booking and booksReserved containing one bookMock',() => {
    component.booking(bookMock);
    expect(component.booksReserved[0]).toBe(bookMock);
  });

  it ('should be called scrollToTop ',() => {
    spyOn(window,'scrollTo');
    component.scrollToTop();
    expect(window.scrollTo).toHaveBeenCalled();

  })
  it ('should be called editBook and set orcServiceMock book / openModal',() => {
    component.editBook(bookMock);
    expect(orcServiceMock.book()).toEqual(bookMock);
    expect(orcServiceMock.openModal()).toBeTrue();
    
  })
});
