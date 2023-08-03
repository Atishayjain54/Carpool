import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
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
    }, { validators: this.passwordMatchValidator }); // Added custom validator for password match
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPassword?.setErrors(null);
      return null;
    }
  };

  onSubmit() {
    const values = this.signupForm.value;
    if (this.signupForm.valid) {
      this.submitted = true;
      const signup: LoginRequest = new LoginRequest(values.email, values.password);

      this.service.addUser(signup).subscribe(
        (response) => {
          if (response.isSuccess) {
            alert('User Registered Successfully. Please Login');
            this.signInClicked.emit();
          } else {
            alert('User already exists');
          }
        },
        (error) => {
          alert(error.errorMessage);
        }
      );
    } else {
      alert('Invalid form fields.');
    }
  }

  toggleState() {
    console.log('toggle clicked');
    this.toggle = !this.toggle;
    this.signInClicked.emit();
  }
}
