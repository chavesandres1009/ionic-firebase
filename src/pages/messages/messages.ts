import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController,
    public db: AngularFireDatabase, private userService: UserService) 
  {
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

  updateAlertMessage(message: any) {
    let prompt = this.alertCtrl.create({
      title: 'update Message',
      message: "Update message",
      inputs: [
        {
          name: 'message',
          placeholder: 'Message',
          value: message.message
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
            this.updateMessage(message, data.message);
          }
        }
      ]
    });
    prompt.present();
  }

  options(message: any) {
    if(message.uid == this.userService.getCurrentUser().uid) {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Message',
        buttons: [
          {
            text: 'Delete',
            role: 'delete',
            handler: () => {
              this.deleteMessage(message.$key);
            }
          },{
            text: 'Modify',
            handler: () => {
              this.updateAlertMessage(message);
            }
          },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }
  }


  saveNewMessage(message: string) {
    let username = this.userService.getUserName();
    if(username) {
      username.on('value', (val) => {
        this.messages.push({
          username: val.val().name,
          uid: this.userService.getCurrentUser().uid,
          message: message
        });
      });
    }
  }

  deleteMessage(mid: string) {
    this.messages.remove(mid);
  }

  updateMessage(message: any, newMessage: string) {
    this.messages.update(message.$key, {
      message: newMessage,
      username: message.username
    });
  }
}
