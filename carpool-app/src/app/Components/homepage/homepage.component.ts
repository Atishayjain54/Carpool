import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private router:Router){}
  toggle : Boolean = false;
  ngOnInit(){

  }
  myProfile() {
    this.toggle = false;
  }
  redirect(){
    this.router.navigate(['home']);
  }
  login(){
    this.router.navigate(['login'])
  }
  profileClick(){
    this.router.navigate(['my-profile'])
  }
}
