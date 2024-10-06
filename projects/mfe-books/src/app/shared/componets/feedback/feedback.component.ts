import { Component, inject, Input, input } from '@angular/core';
import { OrchestratorService } from '../../../../../../shell/src/app/services/orchestrator/orchestrator.service';
import { ServiceResponseMessages } from '../../../../../../shell/src/app/models/enum';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  public orcService = inject(OrchestratorService);
  public styleGeral = 'success';
  public text: string = '';
  public styleTitle: string = 'successTitle';

  @Input() description?: string ;
  @Input() url?: string = 'assets/images/message/success.png';


  @Input() set message(msg: string){
    this.text = msg;
    this.startMessage(msg);
  }

  

  startMessage(msg: string){
    console.log('estilo da message',msg)
    switch(msg){
      case ServiceResponseMessages.CREATE_SUCCESS:
      case ServiceResponseMessages.EDIT_SUCCESS:
      case ServiceResponseMessages.DELETE_SUCCESS: this.setStyleSuccess();
      break
      case ServiceResponseMessages.ERROR: this.setStyleError();       
      break
      case ServiceResponseMessages.TRY_AGAIN: this.setStyleWarning();
    }
  }

 private setStyleSuccess(){
  console.log('set success')
    this.styleGeral = 'success';
    this.styleTitle = 'successTitle';
    this.url = '/assets/images/message/success.png';
  }

 private setStyleError(){
  console.log('set error')
   this.styleGeral = 'warning';
    this.styleTitle = 'warningTitle';
    this.url = '/assets/images/message/error.png';
  }

 private setStyleWarning(){
  console.log('set warning')
    this.styleGeral = 'error';
    this.styleTitle = 'errorTitle';
    this.url = '/assets/images/message/warning.png';
  }
 
}
