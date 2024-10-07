import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookComponent } from './edit-book.component';
import { OrchestratorService } from '../../../../../shell/src/app/services/orchestrator/orchestrator.service';
import { BookService } from '../../services/book.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;
  let orcMock: OrchestratorService;
  let bookMock: BookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBookComponent],
      imports: [ HttpClientTestingModule ],
      providers:[
        OrchestratorService,
        BookService,
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

   
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookComponent);
    component = fixture.componentInstance;
    orcMock = TestBed.inject(OrchestratorService);
    bookMock = TestBed.inject(BookService);
    fixture.detectChanges();
    
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
