import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StorageService } from './services/storageData/storage.service';
import { PublisherService } from './services/publisher/publisher.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
 

 let fixture: ComponentFixture<AppComponent>;
 let component: AppComponent;

 let storageMock : StorageService;
 let publisherMock : PublisherService;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers:[ StorageService, PublisherService],
      declarations: [
        AppComponent
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });
  
   beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    storageMock = TestBed.inject(StorageService);
    publisherMock = TestBed.inject(PublisherService);
    fixture.detectChanges();
   });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shell'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shell');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, shell');
  });
});
