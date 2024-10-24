import { Component, inject, OnInit, signal } from '@angular/core';
import { OrchestratorService } from '../services/orchestrator/orchestrator.service';
import { AuthService } from '../services/auth/auth.service';
import { Credentials, Profile } from '../models/interfaces';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../services/storageData/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  public users: Profile[] = [];
  
  public emailFailed: boolean = false;
  public passFailed: boolean = false;
  public registerFailed: boolean = false;
  public msgAlert = signal('');

  public formLogin: FormGroup;
  public formProfile: FormGroup;
 

  public orcService = inject(OrchestratorService);
  private authService = inject(AuthService);
  private router = inject(Router);
  public profileService = inject(ProfileService);
  private storageService = inject(StorageService);

  constructor(
    private fb: FormBuilder,
  ){
    this.formLogin = fb.group({
      emailUser: ['',[Validators.required]],
      passw: ['',[Validators.required]]
  })

  this.formProfile = fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required,Validators.email]],
    pass: ['',[Validators.required, Validators.minLength(6)]],
    passRepit: ['',[Validators.required,Validators.minLength(6)]],
  },
  
)}
  
  ngOnInit(){  }

  /**
   * Verify email and pass in DB
   * Set user in LocalStorage
   *  navigate for Books List
   */
  public onSubmitLogin(){
    console.log('submiteu')
    if(this.formLogin.valid){
      
        let user = this.getFormValue();
        this.profileService.getByEmail(user.email).subscribe(profile => {
          if(profile.length > 0){
            
            if (profile[0].email === user.email && profile[0].password === user.pass) {
              
              localStorage.setItem('user', JSON.stringify(profile[0]));
              this.router.navigate(['booksCatalog']);

            }else{ 
                this.msgAlert.set("email ou senha inválido")

            } 
          }else{ 
             this.msgAlert.set('Usuário não cadastrado');  
        }

      })
    }else{
      this.msgAlert.set( 'email ou senha não foram preenchidos')
    }
    
  }

  public onsubmitProfile(event: Event){
    console.log('submeter profile',this.formProfile)

    const validPass = this.validatePass(
      this.formProfile.controls['pass'].value, 
      this.formProfile.controls['passRepit'].value);
      
    if(this.formProfile.valid && validPass){
      let profile: Profile = {
        name: this.formProfile.controls['name'].value,
        email:this.formProfile.controls['email'].value,
        password:this.formProfile.controls['pass'].value,
        admin: 0,
      }
    this.profileService.create(profile).subscribe(
    (resp) => { 
      console.log('User created sussess',resp) ;
      this.closeRegister();
    })
    this.orcService.formRegister.set(true);
    }else{
      if(!validPass){
        this.passFailed = true;
        this.msgAlert.set('As senhas não correspondem')
      }
    }
  }

  public passwordsMatchValidator() {
  const password = this.formProfile.get('pass');
  const confirmPassword = this.formProfile.get('passRepit');
  return password && confirmPassword && password.value !== confirmPassword.value ? { passwordsMismatch: true } : null;
}

  private validatePass(pass1: string, pass2: string): boolean{
    return pass1 === pass2 ? true : false
  }

   private templateReset(){
 
  
   }

  private getFormValue():Credentials{
    const email = this.formLogin.get('emailUser')?.value;
    const pass = this.formLogin.get('passw')?.value;
    return {email: email, pass: pass}
  }

  private cleanForm(){
  
      this.formProfile.controls['name'].setValue('');
      this.formProfile.controls['email'].setValue('');
      this.formProfile.controls['pass'].setValue('');
      this.formProfile.controls['passRepit'].setValue('');
      this.formLogin.controls['emailUser'].setValue('');
      this.formLogin.controls['passw'].setValue('');
      this.msgAlert.set('');
      this.templateReset();


  }

  public openModalRegister(){
    this.orcService.formRegister.set(true);
    this.cleanForm();
  }

  public closeRegister(){
    this.orcService.formRegister.set(false);
    this.msgAlert.set('');
    this.formProfile.markAsUntouched();
    this.formLogin.markAsUntouched();
  }

  //future implements
  public listUser(){
    let listUser: any = []
    this.profileService.listUser().subscribe( (data: Profile[]) =>
    {
      listUser = data;
      console.log(listUser)
    }
    )
  }
  //future implements
  public deletUser(id: string){
    this.profileService.delete(id).subscribe((resp: any) => 
    {
      if(resp && resp.id)
      console.log(resp, "deleted com success")
    },
  
  )
  }
 //future implements
  public updateUser(obj: Profile, id:string){
    this.profileService.update(obj,id).subscribe((resp: any) =>
    {
      if(resp && resp.id){
        console.log(resp, 'update user success')
      }else{
        console.log('error')
      }
    })
  }


}
