import { NgModule } from "@angular/core";
import { MyDashComponent } from "./my-dash.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

const dashRoute = [
    {path : '', component : MyDashComponent}
]
@NgModule({
    declarations :[
        MyDashComponent
    ],
    imports : [
        SharedModule,
        RouterModule.forChild(dashRoute)
    ]
})

export class mydashModule{
    constructor(){
        console.log('my-dash module');
    }
}