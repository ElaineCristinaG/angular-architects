import { Component, effect, signal } from '@angular/core';
import { OrchestratorService } from '../services/orchestrator/orchestrator.service';
import { Router } from '@angular/router';
import { ServiceResponseMessages } from '../models/enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

namePage = signal('');
nameUser: string = ''
welcome: string = 'Welcome';
styleMsg: string = 'success';
 


constructor(
  private router: Router,
  public orcService: OrchestratorService,
){ 

  effect(()=>{
    this.nameUser = orcService.user().name;
    let msg = orcService.messageFeed();
    switch(msg){
      case ServiceResponseMessages.CREATE_SUCCESS:
      case ServiceResponseMessages.EDIT_SUCCESS:
      case ServiceResponseMessages.DELETE_SUCCESS: this.styleMsg = 'success';
      break
      case ServiceResponseMessages.ERROR: this.styleMsg = 'error';     
      break
      case ServiceResponseMessages.TRY_AGAIN: this.styleMsg = 'warning';
    }
  })
}


}








