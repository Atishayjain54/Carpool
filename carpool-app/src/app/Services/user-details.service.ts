import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../Models/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private apiUrl = 'https://localhost:7149/api/OfferRide';
  constructor(private httpClient:HttpClient) {}

  getUserDetails(UserId:string){
    return this.httpClient.get<UserDetails>(`${this.apiUrl}/${UserId}`);
  }
  // updateUserDetails(updateUser:UserDetails){
  //   return this.httpClient.put(`${this.apiUrl}`,)
  // }
}
