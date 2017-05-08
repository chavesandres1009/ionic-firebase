import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [ UserService ]
})
export class RegisterPage {

  email: string;
  password: string;
  name: string;
  github: string; 

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private userService: UserService) {

  }

  register(){
    this.userService.singUpUser(this.email, this.password, this.name, this.github).then(
      auhtData => {
        console.log("Se registro bien");
        this.navCtrl.push(TabsPage);
      },
      error => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: error.message,
          buttons: ['Ok'],
        });
        alert.present();
      }
    );
  }
}
