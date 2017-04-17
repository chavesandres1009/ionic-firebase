import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  email: string;
  password: string;
  github: string; 

  constructor(public navCtrl: NavController) {

  }

  register(){

  }
}
