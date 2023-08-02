import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IntermediaryStop } from 'src/app/Models/intermediary-stop';
import { MatchRideRequest } from 'src/app/Models/match-ride-request';
import { MatchRideResponse } from 'src/app/Models/match-ride-response';
import { BookRideService } from 'src/app/Services/book-ride.service';
import { CityService } from 'src/app/Services/city-.service';

@Component({
  selector: 'app-ride-booking-component',
  templateUrl: './ride-booking-component.component.html',
  styleUrls: ['./ride-booking-component.component.css']
})
export class RideBookingComponentComponent {

  display: boolean = false;
  bookRide: FormGroup;
  confirm: boolean = false;
  bookingDetails!: MatchRideResponse;
  request!: MatchRideRequest;
  bookRideRequest!: MatchRideResponse;
  data: MatchRideResponse[] = [];
  mintime!: string;
  min!: string;
  errorMessage: any;
  times: string[] = [];
  cities?: IntermediaryStop[];
  constructor(private router: Router, private bookRideService: BookRideService, private cityService: CityService) {
    this.bookRide = new FormGroup({
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required]),
      rideDate: new FormControl('', [Validators.required]),
      seats: new FormControl('', [Validators.required]),
      time: new FormControl('')
    });
  }
  ngOnInIt() {
    this.cityService.getCities().subscribe(
      data => {
        this.cities = data;
      },
      err =>{}
    )
  }
  separateTimeRange() {
    const timeRange = this.bookRide.get('time')?.value;
    const [timeStart, timeEnd] = timeRange.split('-');
    this.times.push(timeStart);
    this.times.push(timeEnd);
  }
  onSubmit() {
    this.separateTimeRange();
    const values = this.bookRide.value;
    values.rideValidFrom = this.times[0];
    values.rideValidTill = this.times[1];
    this.request = new MatchRideRequest(localStorage.getItem('userId')!, values.from, values.to, values.rideDate, this.times[0], this.times[1], values.seats);
    this.bookRideService.getMatchedRides(this.request).subscribe({
      next: (user) => { this.data = user; this.display = true; },
      error: (err) => { this.errorMessage = err.error }
    });
  }
  redirect() {
    this.router.navigate(['home/offer-ride']);
  }
  bookaRide(ride: MatchRideResponse) {
    this.confirm = true;
    this.bookingDetails = ride;
  }
  book() {
    debugger
    this.bookRideRequest = new MatchRideResponse(this.bookingDetails.ownerId, localStorage.getItem('userId')!, this.bookingDetails.firstName, this.bookingDetails.lastName, this.bookingDetails.availableSeats, this.bookingDetails.source, this.bookingDetails.destination, this.bookingDetails.date, this.bookingDetails.validFrom, this.bookingDetails.validTill, this.bookingDetails.price);
    this.confirm = false;
    this.bookRideService.bookRide(this.bookRideRequest).subscribe({
      next: (user) => { console.log(user); alert("Successfully Booked a Ride"); this.router.navigate(['home']) },
      error: (err) => { this.errorMessage = err.error }
    })
  }
}
