import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { InitComponent } from './init/init.component';
import { HeaderComponent } from './header/header.component';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InitComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    // ReactiveFormsModule
  ],
  providers: [
    AuthService,
    provideZoneChangeDetection(),
    provideClientHydration(),
    provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
