import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl ='https://localhost:7149/api/Auth';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signUp`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, credentials);
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('JWT');
    localStorage.removeItem('userId');
  }

  isLoggedIn(): boolean {
    return !! this.getToken();
  }
}
