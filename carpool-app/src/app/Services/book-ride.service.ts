import { Injectable } from '@angular/core';
import { MatchRideRequest } from '../Models/match-ride-request';
import { MatchRideResponse } from '../Models/match-ride-response';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BookedRides } from '../Models/booked-rides';

@Injectable({
  providedIn: 'root'
})
export class BookRideService {
  private apiUrl = 'https://localhost:7149/api/MatchingRide';
  constructor(private httpClient:HttpClient) { }

  getMatchedRides(matchRideRequest: MatchRideRequest) {
    console.log(matchRideRequest);
    // const queryParams = `parameter1=${matchRideRequest.customerId}&parameter2=${matchRideRequest.source}`;
    const params = new HttpParams()
      .set('customerId', matchRideRequest.customerId)
      .set('source', matchRideRequest.source)
      .set('destination', matchRideRequest.destination)
      .set('rideDate', matchRideRequest.rideDate)
      .set('rideValidFrom', matchRideRequest.rideValidFrom)
      .set('rideValidTill', matchRideRequest.rideValidTill)
      .set('requiredSeats', matchRideRequest.requiredSeats.toString());

    return this.httpClient.get<MatchRideResponse[]>(`${this.apiUrl}`,{params});
  }
  bookRide(bookRideRequestDTO: MatchRideResponse) {
    return this.httpClient.post<MatchRideResponse[]>(`${this.apiUrl}/BookingRide`, bookRideRequestDTO);
  }
  getBookedRide(customerId:string){
    const params = new HttpParams().set('customerId',customerId)
    return this.httpClient.get<BookedRides[]>(`https://localhost:7149/api/BookedRide`,{params});
  }
}
