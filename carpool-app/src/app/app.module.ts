import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { RideBookingComponentComponent } from './Components/ride-booking-component/ride-booking-component.component';
import { RideDetailsComponentComponent } from './Components/ride-details-component/ride-details-component.component';
import { SignUpFormComponent } from './Components/sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './Components/sign-in-form/sign-in-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { MyRidesComponent } from './Components/my-rides/my-rides.component';
import { MyProfileComponent } from './Components/my-profile/my-profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RideBookingComponentComponent,
    RideDetailsComponentComponent,
    SignUpFormComponent,
    SignInFormComponent,
    DashBoardComponent,
    MyRidesComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, HttpClientModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
