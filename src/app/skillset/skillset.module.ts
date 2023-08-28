import { NgModule } from "@angular/core";
import { SkillsetComponent } from "./skillset.component";
import { RouterModule } from "@angular/router";
import { ProgressBarModule } from "primeng/progressbar";
import { SharedModule } from "../shared/shared.module";

const skillRoutes = [
    { path : '', component : SkillsetComponent }
]

@NgModule({
    declarations : [
        SkillsetComponent
    ],
    imports :[  
        SharedModule,
        RouterModule.forChild(skillRoutes),
        ProgressBarModule,
    ]
})

export class SkillSetModule{
    constructor(){
        console.log('skillset module');
    }
}