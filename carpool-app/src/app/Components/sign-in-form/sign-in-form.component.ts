import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent {
  signInForm!: FormGroup;
  myForm!: FormGroup;
  @Output() signUpClicked: EventEmitter<any> = new EventEmitter();
  @Output() submitClicked: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.myForm = new FormGroup({

      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit() {
    this.submitClicked.emit();
  }
  signupClicked() {
    this.signUpClicked.emit();
  }
}

