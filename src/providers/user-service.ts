import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

  public fireAuth: any;
  public userProfile: any;

  constructor(private http: Http) {
    console.log('Hello UserService Provider');
    this.fireAuth = firebase.auth();
    //this.userProfile = firebase.database.ref('users');
  }

  singUpUser(email:string, password:string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        this.fireAuth.signInWithEmailAndPassword(email, password)
        .then((authenticatedUser) => {
          /*this.userProfile.child(authenticatedUser.uid).set({
            email: email
          });*/
        })
      });
  }

  logoutUser() {
    return this.fireAuth.singOut();
  }
}
