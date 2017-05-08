import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';
import { UserService } from '../../providers/user-service';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage {

  registerRoot = RegisterPage;
  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParamas: NavParams, public alertCtrl: AlertController, public angfire: AngularFire,
  private userService: UserService) {

  }

  ionViewDidLoad(){
    console.log('No se para que sirve este metodo');
  }

  signUserUp() {
    //this.userService.singUpUser();
  }

  login() {
    this.userService.login(this.email, this.password).then(
      (authUser) => {
        console.log('succes login');
        this.navCtrl.push(TabsPage);
      },
      (error) => {
          let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: error.message,
          buttons: ['Ok'],
        });
        alert.present();
      }
    );
    /*this.angfire.auth.login({
      email: this.email,
      password: this.password,
    }, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then((response) => {
      console.log('Login succes');
      let currentUser = {
        email: response.auth.email,
        picture: response.auth.photoURL
      };
      window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.navCtrl.pop();
    }).catch((error) => {
      console.log(error);
    });*/
  }

  toRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }
}
