import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { FeedbackComponent } from "../../../../mfe-books/src/app/shared/componets/feedback/feedback.component";


@NgModule({
    declarations:[
      HeaderComponent,
     
    ],
    imports:[
       
    ],
    exports:[
        HeaderComponent
    ]

})
export class HeaderModule { }