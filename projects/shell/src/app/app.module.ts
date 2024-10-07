import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { LoginModule } from './login/login.module';
import { HeaderModule } from './header/header.module';
import { PublisherListModule } from '../../../mfe-publisher/src/app/publisher-list/publisher-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HeaderModule,
    
  ],
  providers:
  [
    AuthService,
    provideZoneChangeDetection(),
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
