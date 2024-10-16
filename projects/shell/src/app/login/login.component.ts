import { Component, inject, OnInit } from '@angular/core';
import { OrchestratorService } from '../services/orchestrator/orchestrator.service';
import { AuthService } from '../services/auth/auth.service';
import { Profile } from '../models/interfaces';
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
  
  loginFailed: boolean = false;

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
    name: ['',[Validators.required]],
    email: ['',[Validators.required]],
    pass: ['',[Validators.required]],
    passRepit: ['',[Validators.required]],
  })
  }
  
  ngOnInit(){
    this.profileService.listUser().subscribe( (data: Profile[]) =>
      
    { if(data.length > 0){
      this.users = data
    }if(data.length === 0){
      console.log(' user list empty')
    }
      
    },error => {
      console.log('data call error')
    });
  }

//   public onSubmit_(event: Event): void{

//     event.preventDefault();
//     event.defaultPrevented;
//     const user: User = {
//         authUser: this.username,
//         authPass: this.password
//     };

//     this.authService.login(user).subscribe(
      
//       (response) => {
//         if(response){
//           this.router.navigate(['booksCatalog'])
//           console.log('Autorizado')
//         }
//       },
//     //   (error) => {
//     //     console.log('Não Autorizado:',error);
//     //     this.loginFailed = true;      
//     // }
//   )
// }


  public onsubmitProfile(event: Event){
    // event.preventDefault();
    
    console.log('submeter profile',this.formProfile.value)
    const validPass = this.validatePass(
      this.formProfile.controls['pass'].value, 
      this.formProfile.controls['passRepit'].value);
    if(this.formProfile.valid && validPass){

      let profile: Profile = {
        name: this.formProfile.controls['name'].value,
        email:this.formProfile.controls['email'].value,
        password:this.formProfile.controls['pass'].value,
      }

    this.profileService.create(profile).subscribe(
    (resp) => { 
      console.log('User created sussess',resp) ;
      this.router.navigate(['/'])
    })
    this.orcService.formRegister.set(true);
    }

  }
   
  private validatePass(pass1: string, pass2: string): boolean{
   return pass1 === pass2 ? true : false
  }

  public onSubmitLogin(){
    const email = this.formLogin.get('emailUser')?.value;
    const pass = this.formLogin.get('passw')?.value;
    this.profileService.getByEmail(email).subscribe(profile => {
      if(profile.length > 0){
        
        if (profile[0].email === email && profile[0].password === pass) {
          
          localStorage.setItem('user', JSON.stringify(profile[0]));
          this.router.navigate(['booksCatalog']);
        }else{ console.log("email ou senha inválido")

        } 
      }else{ console.log('User not existing');  
      }

    })
    
  }

  public listUser(){
    let listUser: any = []
    this.profileService.listUser().subscribe( (data: Profile[]) =>
    {
      listUser = data;
      console.log(listUser)
    }
    )
  }

  public deletUser(id: string){
    this.profileService.delete(id).subscribe((resp: any) => 
    {
      if(resp && resp.id)
      console.log(resp, "deleted com success")
    },
  
  )
  }

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

  public startProfile(){
    this.orcService.formRegister.set(true);
    this.cleanForm(1);
    
  }

  private cleanForm(v: number){
    
    if(v === 1){
      this.formProfile.controls['name'].setValue('');
      this.formProfile.controls['email'].setValue('');
      this.formProfile.controls['pass'].setValue('');
      this.formProfile.controls['passRepit'].setValue('');
    }
    if(v === 2){
      this.formLogin.controls['emailUser'].setValue('');
      this.formLogin.controls['passw'].setValue('');
    }
    
  }


}
