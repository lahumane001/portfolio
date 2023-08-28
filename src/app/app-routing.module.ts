import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path : '', redirectTo : 'home', pathMatch: 'full'},
  { path : 'home', component : HomeComponent},
  { path: 'about', loadChildren : ()=> import("./about/about.module").then((m: any) => { return m.AboutModule; })},
  // { path : 'skills', component : SkillsetComponent}, 
  { path : 'skills', loadChildren : ()=> import("./skillset/skillset.module").then((s : any)=>{
    return s.SkillSetModule;
  })},
  { path : 'projects', loadChildren : ()=> import("./projects/projects.module").then(p => p.ProjectModule)},
  // { path : 'contact', component : ContactComponent},
  { path : 'contact', loadChildren : ()=> import("./contact/contact.module").then(c => c.ContactModule)},
  // { path : 'login', component : LoginComponent},
  { path : 'login', loadChildren : ()=> import("./login/login.module").then(l => l.LoginModule)},
  // { path : 'my-dashboard', component : MyDashComponent }
  { path : 'my-dashboard', canActivate : [AuthGuard], loadChildren : ()=> import('./my-dash/my-dash.module').then(m => m.mydashModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
