import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { RouterModule } from "@angular/router";

const aboutRoute = [
    { path : '', component : AboutComponent}
]

@NgModule({
    declarations : [
        AboutComponent
    ],
    imports : [
        RouterModule.forChild(aboutRoute),
    ]
})

export class AboutModule{
    constructor(){console.log('about module');}
}