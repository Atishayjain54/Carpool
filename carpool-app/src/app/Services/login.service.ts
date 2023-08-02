import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { LoginRequest } from '../Models/login-request';
import { LoginResponse } from '../Models/login-response';
import { RegistrationResponse } from '../Models/registration-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://localhost:7149/api/Auth';

  constructor(private http: HttpClient) { }
  registrationResponse?: RegistrationResponse;
  loginDetails?: LoginResponse

  loginUser(user: LoginRequest): Observable<LoginResponse> {
    return this.http.post<any>(`${this.apiUrl}/Login`, user)
  }
  addUser(user: LoginRequest): Observable<RegistrationResponse> {
    return this.http.post<any>(`${this.apiUrl}/Register`, user)
      .pipe(
        map(response => {

          // if (response.isSuccess) {
          //   return response.userDetails;
          // } else {
          //   throw new Error( );
          // }
          return response;
        }),
        catchError(error => {
          throw new Error('An error occurred during registration.');
        })
      );
  }
  getUserDetails() {
    return this.loginDetails;
  }
  sertUserDetails(loginResponse: LoginResponse) {
    this.loginDetails = loginResponse;
  }
}
