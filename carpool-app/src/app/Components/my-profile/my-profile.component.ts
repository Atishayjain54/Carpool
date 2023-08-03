import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetails } from 'src/app/Models/user-details';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { UserDetailsService } from 'src/app/Services/user-details.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  myProfile : FormGroup;
  userDetails!: UserDetails;
  userId!:string;
  uploadDetails: boolean = false;
  constructor(private userDetailService :UserDetailsService,private authService:AuthenticationService) {
    this.myProfile = new FormGroup({
      firstName: new FormControl(this.userDetails?.firstName, [Validators.required,  Validators.pattern('[A-Za-z ]*'), Validators.maxLength(25)]),
      lastName: new FormControl(this.userDetails?.lastName, [Validators.required]),
      phoneNumber: new FormControl(this.userDetails?.phoneNumber, [Validators.required, Validators.pattern('[0-9]{10}')])
    })
  }
  ngOnInIt(){
    this.userId = this.authService.getUserId()!;
    this.getUserDetails(this.userId);
  }
  getUserDetails(userId:string){
    this.userDetailService.getUserDetails(userId).subscribe(
      data =>{
        this.userDetails=data;
      }
    )
    this.myProfile.patchValue({
      firstName: this.userDetails.firstName,
      lastName: this.userDetails.lastName,
      phoneNumber: this.userDetails.phoneNumber
    });
  }
  editDetails() {
    this.uploadDetails = !this.uploadDetails;
  }
  reload() {
    window.location.reload();
  }
  submit() {
    // if(this.myProfile.valid){
    //   this.userDetailService.updateUserDetails()
    }
  }

