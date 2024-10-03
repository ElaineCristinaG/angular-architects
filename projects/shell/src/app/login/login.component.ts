import { Component, inject } from '@angular/core';
import { OrchestratorService } from '../services/orchestrator/orchestrator.service';
import { AuthService } from '../services/auth/auth.service';
import { Profile, User } from '../models/login';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  fullname: string = '';
  email: string = '';
  pass: string = '';
  passRepit: string = '';
  
  loginFailed: boolean = false;

  public orcService = inject(OrchestratorService);
  private authService = inject(AuthService);
  private router = inject(Router);
  public profileService = inject(ProfileService)

  public onSubmit(event: Event): void{

    event.preventDefault();
    event.defaultPrevented;
    const user: User = {
        authUser: this.username,
        authPass: this.password
    };
  
  this.authService.login(user).subscribe( {
    next: response => {
      if(response.success){
        this.router.navigate(['home'])
        console.log('Autorizado')
      }
    },
    error: error => {
      console.log('Não Autorizado:',error);
      this.loginFailed = true;
    }
  })
}


  public onsubmitRegister(){
    const passValid: boolean = this.validatePass(this.pass);
    if(passValid){
      const profile: Profile = {
        name: this.fullname,
        email: this.email,
        password: this.pass,
   }

   this.profileService.creat(profile).subscribe(
    resp=>{
      console.log(resp)
    },
    error => { console.log(error) },
    () =>{ }
   )

   this.profileService.listUser().subscribe(
   resp => { console.log(resp) }
   )
 

  }
   
   
  }

  private validatePass(password: string):boolean{
    return this.passRepit === password ? true : false;
  }

  public onSubmit_(event: Event){
    console.log('submit login')
    this.router.navigate(['header']); 
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
    })
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



}
