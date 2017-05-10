import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RedditProvider } from '../../providers/reddit-provider';
import { RedditDetailPage } from '../reddit-detail-page/reddit-detail-page';

/**
 * Generated class for the RedditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-reddit-page',
  templateUrl: 'reddit-page.html',
  providers: [ RedditProvider ]
})
export class RedditPage {

  category: string;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private redditService: RedditProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedditPage');
  }

  ngOnInit(){
    this.getPost('sports');
  }

  getPost(category) {
    this.redditService.getPost(category).subscribe(
      response => {
        console.log(response);
        this.items = response.data.children;
      }
    )
  }

  viewDetail(item: any) {
    this.navCtrl.push(RedditDetailPage, {
      item: item
    });
  }

  changeCategory() {
    this.getPost(this.category);
  }

}
