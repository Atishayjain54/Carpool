import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IntermediaryStop } from 'src/app/Models/intermediary-stop';
import { OfferRideRequest } from 'src/app/Models/offer-ride-request';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { CityService } from 'src/app/Services/city-.service';
import { OfferRideService } from 'src/app/Services/offer-ride.service';

@Component({
  selector: 'app-ride-details-component',
  templateUrl: './ride-details-component.component.html',
  styleUrls: ['./ride-details-component.component.css']
})
export class RideDetailsComponentComponent {
  next: boolean = false;
  stopNumber!: number;
  OfferRide: FormGroup;
  rideDetails!: FormGroup;
  stopDetails!: FormGroup;
  pickupStop!: FormGroup;
  // stops: IntermediaryStop[] = [];
  times: string[] = [];
  previousDate!: string;
  min!: string;
  previousStop: string = "";
  stopComponent: boolean = false;
  cities?: IntermediaryStop[]

  constructor(private formBuilder: FormBuilder, private router: Router, private offerRideService: OfferRideService, private cityService: CityService,private authService : AuthenticationService) {
    this.cityService.getCities().subscribe(
      data => {
        this.cities = data;
        console.log(this.cities);
      },
      err => { }
    )
    this.OfferRide = this.formBuilder.group({
      rideDetails: this.formBuilder.group({
        from: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        to: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        date: [null, [Validators.required, this.futureDateValidator]],
        time: ['']
      }),
      stopDetails: this.formBuilder.group({
        stopName1: [''],
        stopName2: [''],
        stopName3: [''],
        seats: ['', Validators.required],
        price: [null, [Validators.required, this.priceGreaterThanZeroValidator]]
      })
    });
    this.rideDetails = this.OfferRide.get('rideDetails') as FormGroup;
    this.stopDetails = this.OfferRide.get('stopDetails') as FormGroup;
  }
  futureDateValidator(control: FormControl) {
    if (control.value && control.value < new Date().toISOString().split('T')[0]) {
      return { futureDate: true };
    }
    return null;
  }
  priceGreaterThanZeroValidator(control: FormControl) {
    if (control.value && control.value <= 0) {
      return { priceGreaterThanZero: true };
    }
    return null;
  }
  ngOnInIt() {
    
  }
  separateTimeRange() {
    const timeRange = this.rideDetails.get('time')?.value;
    const [timeStart, timeEnd] = timeRange.split('-');
    this.times.push(timeStart);
    this.times.push(timeEnd);
  }

  submit() {
    this.separateTimeRange();
    if (this.OfferRide?.valid) {
      console.log('Form submitted successfully!');
      const offerRideRequest: OfferRideRequest = {
        rideId : "",
        ownerId: this.authService.getUserId()!,
        source: this.rideDetails.get('from')?.value,
        destination: this.rideDetails.get('to')?.value,
        date: this.rideDetails.get('date')?.value,
        rideValidFrom: this.times[0],
        rideValidTill: this.times[1],
        availableSeats: this.stopDetails.get('seats')?.value,
        price: this.stopDetails.get('price')?.value,
        intermediaryStops: this.getStops(),
        isRideBooked: false,
        customerId: ''
      };
      this.offerRideService.submitOfferRide(offerRideRequest).subscribe(
        (response) => {
          alert('Offer ride request submitted successfully!');
          console.log('Offer ride request submitted successfully!', response);
          this.OfferRide.reset();
        },
        error => {
          console.error('Error submitting offer ride request', error);
        }
      );
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

  // addStop() {
  //   const newStopNumber = this.stopNumber + 1;
  //   const stopNameControl = this.formBuilder.control('', Validators.required);
  //   const pickupDateControl = this.formBuilder.control('', Validators.required);
  //   const pickupTimeControl = this.formBuilder.control('', Validators.required);
  //   this.pickupStop?.addControl(`stopName${newStopNumber}`, stopNameControl);
  //   this.pickupStop?.addControl(`pickupDate${newStopNumber}`, pickupDateControl);
  //   this.pickupStop?.addControl(`pickupTime${newStopNumber}`, pickupTimeControl);
  //   this.stopNumber = newStopNumber;
  // }
  getStops(): IntermediaryStop[] {
    const stops: IntermediaryStop[] = [];

    for (let i = 1; i <= 3; i++) {
      const stopName = this.stopDetails.get(`stopName${i}`)?.value;
      let intermediarystop = new IntermediaryStop();
      if (stopName != "") {
        intermediarystop.name = stopName;
        intermediarystop.id = "";
        stops.push(intermediarystop);
      }
    }
    return stops;
  }
  nextbutton() {
    this.stopComponent = true;
    this.pickupStop = new FormGroup({
      stopName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
      pickupDate: new FormControl('', [Validators.required]),
      pickupTime: new FormControl('', [Validators.required])
    });
  }
  addCard() {
    this.next = true;
  }

  redirect() {
    this.router.navigate(['home/book-ride']);
  }
}
