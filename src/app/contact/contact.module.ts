import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const contactRoutes = [
    { path : '', component : ContactComponent}
]
@NgModule({
    declarations:[
        ContactComponent
    ],
    imports : [
        SharedModule,
        RouterModule.forChild(contactRoutes)
    ]
})

export class ContactModule{
    constructor(){
        console.log('contact module');
    }
}