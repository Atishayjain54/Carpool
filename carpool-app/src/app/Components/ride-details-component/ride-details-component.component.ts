import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride-details-component',
  templateUrl: './ride-details-component.component.html',
  styleUrls: ['./ride-details-component.component.css']
})
export class RideDetailsComponentComponent {
  constructor(private router: Router){ }
  OfferRide ?: FormGroup<any>
  rideDetails ?: FormGroup
  stopDetails ?:FormGroup
  stopComponent :Boolean = false;
  pickupStop ?: FormGroup;

  nextbutton(){
    this.stopComponent= true;
    this.pickupStop = new FormGroup({
      stopName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
      pickupDate: new FormControl('', [Validators.required]),
      pickupTime: new FormControl('', [Validators.required])
    });
  }
  redirect(){
    this.router.navigate(['home/book-ride']);
  }
}
