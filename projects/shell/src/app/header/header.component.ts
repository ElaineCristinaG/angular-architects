import { Component, computed, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { OrchestratorService } from '../services/orchestrator/orchestrator.service';
import { BookService } from '../../../../mfe-books/src/app/services/book.service';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Profile } from '../models/login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

namePage = signal('');
nameUser: string = ''
welcome: string = 'Welcome'
 


constructor(
  private router: Router,
  public orcService: OrchestratorService,
){ 

  effect(()=>{
    this.nameUser = orcService.user().name
  })
}


}








