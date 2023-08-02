import { Component } from '@angular/core';
import { UserDetails } from 'src/app/Models/user-details';
import { LoginComponent } from '../login/login.component';
import { LoginService } from 'src/app/Services/login.service';
import { LoginResponse } from 'src/app/Models/login-response';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  userDetails?:LoginResponse;
  constructor(private loginService: LoginService) {

  }
  ngOnInIt() {
    this.userDetails = this.loginService.getUserDetails();

  }
}
