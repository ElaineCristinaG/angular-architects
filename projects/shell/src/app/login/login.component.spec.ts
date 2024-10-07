import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { OrchestratorService } from '../services/orchestrator/orchestrator.service';
import { ProfileService } from '../services/profile/profile.service';
import { StorageService } from '../services/storageData/storage.service';
import { of, throwError } from 'rxjs';
import { Profile, ProfileResponse } from '../models/interfaces';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let orcService : OrchestratorService;
  let authService: AuthService;
  let router: Router;
  let profileService: ProfileService;
  let storageService: StorageService;
   let fb: FormBuilder;

  let mockUsers:ProfileResponse[] = [
    { id: '1', name: 'User A',email: 'test1@test.com', password:'123456' }, 
    { id: '2', name: 'User B',email: 'test2@test.com', password:'654321' }];
   let profileMock: Profile = { name: 'User A',email: 'test1@test.com', password:'123456' } ;

  let mockEvent: Event = {  type: 'click' } as Event; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers:[
        OrchestratorService,
        AuthService,
        Router,
        ProfileService,
        StorageService,
        { provide: Router, useValue: router}
      ],
      imports:[
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    
  });

  beforeEach(() =>{
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    orcService = TestBed.inject(OrchestratorService);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    profileService = TestBed.inject(ProfileService);
     fb = TestBed.inject(FormBuilder);
    spyOn(profileService,'listUser').and.returnValues(of(mockUsers));
    spyOn(console, 'log'); 
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should load users successfully', () => {
    spyOn(profileService,'listUser').and.returnValues(of(mockUsers));
    component.ngOnInit();
    expect(component.users).toEqual(mockUsers);
  });

  it('should log when user list is empty', () => {
     spyOn(profileService,'listUser').and.returnValue(of([]));
    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('user list empty');
  });

  it('should log an error when data call fails', () => {
     spyOn(profileService,'listUser').and.returnValue(throwError(()=> new Error('data call error')));
    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('data call error');
  });

  it('shold be called onsubmitProfile and ProfileService is called one and return object typeProfile', () =>{
    component.formProfile.controls['name'].setValue('John Doe'); 
    component.formProfile.controls['pass'].setValue('');
    component.formProfile.controls['passRepit '].setValue('');
    component.formProfile.controls['email'].setValue('john.doe@example.com');
    component.onsubmitProfile(mockEvent);
    spyOn(profileService,'create').and.returnValues(of(profileMock));
    expect(profileService.create).toHaveBeenCalledTimes(1);
  })

  it('', ()=>{

  })

});
