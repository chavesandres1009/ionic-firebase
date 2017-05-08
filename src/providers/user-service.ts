import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import { AuthProviders, AuthMethods, AngularFire, AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

  public fireAuth: any;
  public userProfile: any;
  public usersInfo: FirebaseListObservable<any[]>; 

  constructor(private http: Http, private angFire: AngularFire, db: AngularFireDatabase) {
    console.log('Hello UserService Provider');
    this.fireAuth = firebase.auth();
    this.usersInfo = db.list('users');
    this.userProfile = firebase.database().ref('users');
  }

  singUpUser(email:string, password:string, name: string, github: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        //this.newUser(, name, github);
        this.saveNewUser(newUser.uid, name, github);
        this.fireAuth.signInWithEmailAndPassword(email, password)
        
        .then((authenticatedUser) => {
          /*this.userProfile.child(authenticatedUser.uid).set({
            email: email
          });*/
        })
      });
  }

  private saveNewUser(uid: string, name: string, github: string) {
    this.userProfile.child(uid).set(
      {
        name: name,
        github: github
      }
    );    
  }

  private newUser(uid:string, name: string, github: string) {
    this.usersInfo.push(
      {
        uid : {
          name: name,
          github: github
        }
      }
    );
  }

  logoutUser() {
    return this.fireAuth.singOut();
  }

  login(email: string, password:string) {
    return this.angFire.auth.login({
      email: email,
      password: password
    }, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });
  }

  logOut() {
    return this.angFire.auth.logout() ; 
  }

  getUser() {
    return firebase.auth().currentUser;
  }

  getUserName() {
    let current = firebase.auth().currentUser;
    if(current) {
      return firebase.database().ref('users/' + current.uid);
    }
    else {
      return null;
    }
  }

  /*private userInfo(name: string, age:number, github: string,) {
    return {
      name: name,
      age: age,
      github: github
    };
  }*/
}
