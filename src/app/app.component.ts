import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login'

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    var fireBaseConfig =  {
      apiKey: "AIzaSyBGzuoYSFSWxhtjxggLMbL32NELgXH5GF4",
      authDomain: "ionic-pdevs.firebaseapp.com",
      databaseURL: "https://ionic-pdevs.firebaseio.com",
      projectId: "ionic-pdevs",
      storageBucket: "ionic-pdevs.appspot.com",
      messagingSenderId: "613143141806"
   };

  firebase.initializeApp(fireBaseConfig);

  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      console.log('is login');
    } else {
      this.rootPage = LoginPage;
      console.log('is not login');
    }
  });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
