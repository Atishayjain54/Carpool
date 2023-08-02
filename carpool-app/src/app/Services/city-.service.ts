import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IntermediaryStop } from '../Models/intermediary-stop';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl = 'https://localhost:7149/api/City'
  constructor(private httpClient : HttpClient) { }

  getCities(){
    return this.httpClient.get<IntermediaryStop[]>(this.apiUrl);
  }
}
