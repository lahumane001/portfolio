import { NgModule } from "@angular/core";
import { SharedModule } from "primeng/api";
import { ProjectsComponent } from "./projects.component";
import { RouterModule } from "@angular/router";

const projectRoutes = [
    { path : '', component : ProjectsComponent}
]
@NgModule({
    declarations : [
        ProjectsComponent
    ],
    imports :[
        SharedModule,
        RouterModule.forChild(projectRoutes)
    ]
})

export class ProjectModule{
    constructor(){
        console.log('project module');
    }
}