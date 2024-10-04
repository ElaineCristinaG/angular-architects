import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "../header/header.module";
import { BooksCatalogModule } from "../../../../mfe-books/src/app/books-catalog/books-catalog.module";

@NgModule({
    declarations:[
        LoginComponent
    ],
    imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HeaderModule,
],
    exports:[
        LoginComponent
    ]

})
export class LoginModule { }