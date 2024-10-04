import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { InitComponent } from "./init.component";
import { HeaderModule } from "../header/header.module";
import { loadRemoteModule } from "@angular-architects/module-federation";



@NgModule({
    declarations:[
       InitComponent,
    ],
    imports:[
        FormsModule,
        HeaderModule,
    //      RouterModule.forRoot([
    //   {
    //     path: 'booksCatalog',
    //     loadChildren: () =>
    //       loadRemoteModule({
    //         remoteEntry: 'http://localhost:4200/remoteEntry.js',
    //         remoteName: 'mfe-books',
    //         exposedModule: './BooksModule',
    //       }).then((m) => m.BooksCatalogModule),
    //   },
    // ]),
          
    ],
    exports:[
        
    ]

})
export class InitModule { }