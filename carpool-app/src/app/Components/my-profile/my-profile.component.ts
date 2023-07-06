import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  myProfile : FormGroup;
  userDetails: any;
  uploadDetails: boolean = false;
  imageUpload!: string;
  constructor() {
   
    this.imageUpload = this.userDetails.imageUrl;
    this.myProfile = new FormGroup({
      firstName: new FormControl(this.userDetails.firstName, [Validators.required,  Validators.pattern('[A-Za-z ]*'), Validators.maxLength(25)]),
      lastName: new FormControl(this.userDetails.lastName, [Validators.required]),
      phoneNumber: new FormControl(this.userDetails.phoneNumber, [Validators.required, Validators.pattern('[0-9]{10}')])
    })
    Object.keys(this.myProfile.controls).forEach(key => {
      this.myProfile.get(key)!.disable();
    })
  }
  editDetails() {
    this.uploadDetails = !this.uploadDetails;
    Object.keys(this.myProfile.controls).forEach(key => {
      this.myProfile.get(key)!.enable();
    })
  }
  reload() {
    window.location.reload();
  }
  submit() {
  }
  previewFile($event: any) {
    var file = $event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = (e) => {
      this.imageUpload = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  ngOnInit(): void {
  }
}
