import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IncidentdetailsComponent } from './MyComponents/incidentdetails/incidentdetails.component';
import { SigninComponent } from './MyComponents/signin/signin.component';
import { SignupComponent } from './MyComponents/signup/signup.component';

const routes: Routes = [
  {path:"app",component:AppComponent},
  {path:"incident", component:IncidentdetailsComponent},
  {path:"register", component:SignupComponent},
  {path:"login", component:SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
