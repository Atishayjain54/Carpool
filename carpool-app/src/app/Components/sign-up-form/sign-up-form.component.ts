import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  signupForm!:FormGroup
  @Output() signInClicked: EventEmitter<any> = new EventEmitter();
  @Output() submitClicked: EventEmitter<any> = new EventEmitter();
  
  onSubmit(){
    this.submitClicked.emit();
  }
  toggle: boolean = true;

  toggleState() {
    console.log("tpggel clicked");
    this.toggle = !this.toggle;
    this.signInClicked.emit();
  }
}
