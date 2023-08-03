import { Component } from '@angular/core';
import { UserDetails } from 'src/app/Models/user-details';
import { LoginComponent } from '../login/login.component';
import { LoginService } from 'src/app/Services/login.service';
import { LoginResponse } from 'src/app/Models/login-response';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  userName?:string;
  constructor(private loginService: LoginService,private authService :AuthenticationService) {
    this.getUserName();
  }
  getUserName(){
    this.userName = this.authService.getUserNameByLocalStorage()!;
  }
}
