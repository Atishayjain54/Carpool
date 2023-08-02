import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/Models/login-request';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  signupForm!: FormGroup;
  @Output() signInClicked: EventEmitter<any> = new EventEmitter();
  @Output() submitClicked: EventEmitter<any> = new EventEmitter();
  submitted = false;
  toggle = true;
  errorMessage!: string;
  constructor(private service: LoginService, private router: Router) {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  isMatchPassword(pass: string, confirmPass: string) {

    return pass === confirmPass;
  }
  onSubmit() {
    
    const values = this.signupForm.value;
    if (this.signupForm.valid && this.signupForm.errors === null && this.isMatchPassword(values.password, values.confirmPassword)) {
      this.submitted = true;
      const signup: LoginRequest = new LoginRequest(values.email, values.password);


      this.service.addUser(signup).subscribe(
        (response) => {
         if(response.isSuccess){
          alert('User Registered Successfully. Please Login');
          this.signInClicked.emit();
        }
      else{
        alert('User already exist');
      }}

        , (error) => {
          alert(error.errorMessage);
        }
      );
    }
    else {
      alert("Password is not match");
    }
  }
  toggleState() {
    console.log('toggle clicked');
    this.toggle = !this.toggle;
    this.signInClicked.emit();
  }
}
