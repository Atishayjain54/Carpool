import { Injectable } from '@angular/core';
import { OfferRideRequest } from '../Models/offer-ride-request';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BookedRides } from '../Models/booked-rides';

@Injectable({
  providedIn: 'root'
})
export class OfferRideService {
  private apiUrl = 'https://localhost:7149/api/OfferRide';

  constructor(private httpClient: HttpClient) { }

  submitOfferRide(offerRideRequest: OfferRideRequest) {
    console.log(offerRideRequest);
    return this.httpClient.post<OfferRideRequest[]>(`${this.apiUrl}`, offerRideRequest);
  }
  getOfferedRide(ownerId: string) {
    // const params = new HttpParams().set('OwnerId', ownerId);
    return this.httpClient.get<BookedRides[]>(`${this.apiUrl}/${ownerId}`);
  }
}
