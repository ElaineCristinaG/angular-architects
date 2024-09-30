import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
  },
  {
    path:'booksCatalog',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      remoteName: 'mfe-books',
      exposedModule: './BooksCatalogModule'
    }).then(m => m.BooksCatalogModule).catch(error => console.log(error, 'Error loading Book BooksCatalogModule'))
  },
  {
    path:'publisher',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'mfe-publisher',
      exposedModule: './Module'
    }).then(module => module.AppModule).catch(error => console.log(error, 'Error loading Publisher AppModule'))
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }