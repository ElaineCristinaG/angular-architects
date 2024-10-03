import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations:[
        LoginComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule
    ],
    exports:[
        LoginComponent
    ]

})
export class LoginModule { }