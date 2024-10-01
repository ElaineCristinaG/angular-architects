import { Component, inject } from '@angular/core';
import { OrchestratorService } from '../services/orchestrator/orchestrator.service';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  credentials: User = { authUser: '', authPass: '' };
  loginFailed: boolean = false;

  private orcService = inject(OrchestratorService);
  private authService = inject(AuthService);
  private router = inject(Router);

  public registration(): void{
    
    this.orcService.formRegister.set(true);
    console.log(this.orcService.formRegister())
  }

  public checkUser(): void{

    this.credentials.authPass = this.password;
    this.credentials.authUser = this.username;
    console.log(this.credentials)
    if (this.authService.login(this.credentials)) {
      console.log(this.loginFailed, 'authTrue')
        // this.router.navigate(['/booksCatalog']); 
      } else {
        this.loginFailed = true;
        
      }

  }


   
 

}
