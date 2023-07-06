import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride-booking-component',
  templateUrl: './ride-booking-component.component.html',
  styleUrls: ['./ride-booking-component.component.css']
})
export class RideBookingComponentComponent {

  constructor(private router: Router){}
  bookRide !: FormGroup;
  onSubmit(){}
  redirect(){
    this.router.navigate(['home/offer-ride']);
  }
}
