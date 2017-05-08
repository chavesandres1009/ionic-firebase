import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire, AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../../providers/user-service';

/**
 * Generated class for the Messages page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
  providers: [ UserService ]
})
export class MessagesPage {

  messages: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public db: AngularFireDatabase, private userService: UserService) {
    this.messages = db.list('messages');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Messages');
  }

  addMessage(){
    let prompt = this.alertCtrl.create({
      title: 'New Message',
      message: "Enter a new message",
      inputs: [
        {
          name: 'message',
          placeholder: 'Message'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.saveNewMessage(data.message);
          }
        }
      ]
    });
    prompt.present();
  }

  saveNewMessage(message: string) {
    let username = this.userService.getUserName();
    if(username) {
      username.on('value', (val) => {
        this.messages.push({
          username: val.val().name,
          message: message
        });
      });
    }
  }

}
