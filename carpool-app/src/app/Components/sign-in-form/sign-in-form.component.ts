import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/Models/login-request';
import { LoginResponse } from 'src/app/Models/login-response';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent {
  signInForm!: FormGroup;
  myForm!: FormGroup;
  data!: LoginResponse
  errorMessage!: string;
  @Output() signUpClicked: EventEmitter<any> = new EventEmitter();
  @Output() submitClicked: EventEmitter<any> = new EventEmitter();

  constructor(private loginService: LoginService, private router: Router,private authService:AuthenticationService) {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });

    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(25)])
    });
  }

  onSubmit() {
    this.errorMessage = "";
    if (this.signInForm.valid) {
      const values = this.signInForm.value;
      const signIn: LoginRequest = new LoginRequest(values.email, values.password);
      this.loginService.loginUser(signIn).subscribe(
        (user) => {
          this.data = user;
          if (this.data?.userId != null && this.data?.jwtToken != "") {
            this.authService.storeUserId(this.data.userId);
            this.authService.storeToken(this.data.jwtToken);
            this.authService.storeUserName(this.data.firstName);
            // this.loginService.sertUserDetails(user);
            this.router.navigate(['home']);
            alert('Login Successfully.');
          }
          // else if(this.data.userId == null){
          //   alert('User is not exist.');
          // }
          else {
            this.errorMessage = 'Either your email or password isn’t right. Double-check them.';
          }
        })
      }
    // error: (err) => {
    //   this.errorMessage = err.error;
    // }
  }

  signupClicked() {
    this.signUpClicked.emit();
  }
}
