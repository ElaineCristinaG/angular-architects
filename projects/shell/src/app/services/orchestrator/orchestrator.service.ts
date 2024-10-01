import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrchestratorService {
 
  public formRegister = signal(false);
  public openBooks = signal(false);

  constructor() { }
}
