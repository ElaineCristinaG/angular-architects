import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCatalogComponent } from './books-catalog.component';
import { BookService } from '../services/book.service';
import { OrchestratorService } from '../../../../shell/src/app/services/orchestrator/orchestrator.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BooksCatalogComponent', () => {
  let component: BooksCatalogComponent;
  let fixture: ComponentFixture<BooksCatalogComponent>;

  let bookMock: BookService;
  let orcMock: OrchestratorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksCatalogComponent],
      providers:[ BookService, OrchestratorService],
      imports:[
        HttpClientTestingModule,
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

   
  });
 beforeEach(() => {
    fixture = TestBed.createComponent(BooksCatalogComponent);
    bookMock = TestBed.inject(BookService);
    orcMock = TestBed.inject(OrchestratorService);
    component = fixture.componentInstance;
    fixture.detectChanges();
 })


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
