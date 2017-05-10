import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';
import { UserDetails } from '../pages/user-details/user-details';
import { MessagesPage } from '../pages/messages/messages';
import { RedditPage } from '../pages/reddit-page/reddit-page';
import { RedditDetailPage } from '../pages/reddit-detail-page/reddit-detail-page';

import { AngularFireModule } from 'angularfire2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*
import { Camera } from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
*/

export const fireBaseConfig =  {
  apiKey: "AIzaSyBGzuoYSFSWxhtjxggLMbL32NELgXH5GF4",
  authDomain: "ionic-pdevs.firebaseapp.com",
  databaseURL: "https://ionic-pdevs.firebaseio.com",
  projectId: "ionic-pdevs",
  storageBucket: "ionic-pdevs.appspot.com",
  messagingSenderId: "613143141806"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UserDetails,
    MessagesPage,
    RedditPage,
    RedditDetailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(fireBaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UserDetails,
    MessagesPage,
    RedditPage,
    RedditDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    /*File,
    Transfer,
    Camera,
    FilePath,*/
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
