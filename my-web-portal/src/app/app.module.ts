import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { SubscriptionComponent } from './MyComponents/subscription/subscription.component';
import { StatusComponent } from './MyComponents/status/status.component';
import { CurrentstatusComponent } from './MyComponents/currentstatus/currentstatus.component';
import { MaintrafficlightComponent } from './MyComponents/maintrafficlight/maintrafficlight.component';
import { ServerlightComponent } from './MyComponents/serverlight/serverlight.component';
import { TrackingcolorsComponent } from './MyComponents/trackingcolors/trackingcolors.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { IncidentComponent } from './MyComponents/incident/incident.component';
import { IncidentdetailsComponent } from './MyComponents/incidentdetails/incidentdetails.component';
import { UserService } from './services/user.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './MyComponents/signin/signin.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SubscriptionComponent,
    StatusComponent,
    CurrentstatusComponent,
    MaintrafficlightComponent,
    ServerlightComponent,
    TrackingcolorsComponent,
    FooterComponent,
    IncidentComponent,
    IncidentdetailsComponent,
    SigninComponent,
    SignupComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
   
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
