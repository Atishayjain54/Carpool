import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://localhost:7149/api/Auth';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signUp`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, credentials);
  }

  storeToken(token: string): void {
    localStorage.setItem('JWT', token);
  }
  storeUserId(userId: string): void {
    localStorage.setItem('UserId', userId);
  }

  getUserId(): string | null {
    return localStorage.getItem("UserId");
  }
  getToken(): string | null {
    return localStorage.getItem('JWT');
  }
  storeUserName(userName: string): void {
    return localStorage.setItem('userName', userName);
  }
  getUserNameByLocalStorage(): string | null {
    return localStorage.getItem('userName');
  }

  logout(): void {
    localStorage.removeItem('JWT');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
