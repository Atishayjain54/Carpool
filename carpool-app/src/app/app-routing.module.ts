import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { RideBookingComponentComponent } from './Components/ride-booking-component/ride-booking-component.component';
import { RideDetailsComponentComponent } from './Components/ride-details-component/ride-details-component.component';
import { MyProfileComponent } from './Components/my-profile/my-profile.component';
import { MyRidesComponent } from './Components/my-rides/my-rides.component';
import { combineLatest } from 'rxjs';
import { SignInFormComponent } from './Components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './Components/sign-up-form/sign-up-form.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent ,children: [
    {path:'signIn' , component: SignInFormComponent},
    {path:'signUp', component: SignUpFormComponent}
  ]},
  { path: 'home', component: HomepageComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashBoardComponent },
    { path: 'book-ride', component: RideBookingComponentComponent },
    { path: 'offer-ride', component: RideDetailsComponentComponent },
    { path: 'my-rides', component: MyRidesComponent },
    { path: 'my-profile', component: MyProfileComponent }
  ]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
