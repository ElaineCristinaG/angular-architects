import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { LoginModule } from './login/login.module';
import { HeaderModule } from './header/header.module';
import { InitModule } from './init/init.module';
import { BooksCatalogModule } from '../../../mfe-books/src/app/books-catalog/books-catalog.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    InitModule,
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
