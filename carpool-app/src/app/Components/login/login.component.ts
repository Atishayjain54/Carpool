import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignUp: boolean = true;
  isSignInForm: boolean = false;
  @Input() isSignInClick: any;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.isSignUpForm= true;
  }
  toggleState() {
    this.isSignUp = !this.isSignUp;
  }
  signInClicked() {
    this.isSignUp = false;
  }
  signUpClicked() {
    this.isSignUp = true;
  }
  submitClicked() {
    this.router.navigate(['/home']);
  }
}
