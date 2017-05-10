import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { UserDetails } from '../user-details/user-details';
import { MessagesPage } from '../messages/messages';
import { RedditPage } from '../reddit-page/reddit-page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagesPage;
  tab3Root = RedditPage;
  tab4Root = UserDetails;

  constructor() {
    
  }
}
