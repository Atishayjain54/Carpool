import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginResponse } from 'src/app/Models/login-response';
import { UserDetails } from 'src/app/Models/user-details';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { BookRideService } from 'src/app/Services/book-ride.service';
import { LoginService } from 'src/app/Services/login.service';
import { OfferRideService } from 'src/app/Services/offer-ride.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private router:Router,private loginService:LoginService,private authenticationService:AuthenticationService,bookRideService:BookRideService,offerRideService:OfferRideService){
    this.getUserName();
  }
  toggle : Boolean = false;
  loginDetails?: LoginResponse;
  userName?:string
  
  ngOnInit(){
    this.loginDetails = this.loginService.getUserDetails();
  }
getUserName(){
  this.userName = this.authenticationService.getUserNameByLocalStorage()!;
}
  myProfile() {
    this.toggle = false;
  }
  myRides(){
    this.toggle = false;
    this.router.navigate(['home/my-rides']);
  }
  redirect(){
    this.router.navigate(['home']);
  }
  login(){
    this.authenticationService.logout();
    this.router.navigate(['login/signIn']);
  }
  profileClick(){
    this.router.navigate(['home/my-profile']);
  }
}
