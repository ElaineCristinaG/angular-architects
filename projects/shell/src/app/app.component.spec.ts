import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StorageService } from './services/storageData/storage.service';
import { PublisherService } from './services/publisher/publisher.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Publisher } from './models/interfaces';
import { provideClientHydration } from '@angular/platform-browser';

describe('AppComponent', () => {
 

 let fixture: ComponentFixture<AppComponent>;
 let component: AppComponent;

 let storageMock : StorageService;
 let publisherMock : PublisherService;

 let responsePublisher: Publisher = { id: 0,  name: 'str',  country:'str',  founded: 0,  website: 'str' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
      provideClientHydration(),
     ],
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
    expect(app.title).toEqual('Books & Publisher');
  });

  it('should getPublishers and call service storage return data valid',()=>{
    spyOn(storageMock,'setDataStorage');
    spyOn(publisherMock,'getAll').and.returnValue(of([responsePublisher]));
    component.getPublishers();
    expect(component.publishers()).toBe([responsePublisher]);

  });



});
