import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { UserDetails } from '../user-details/user-details';
import { MessagesPage } from '../messages/messages';
import { GithubPage } from '../github-page/github-page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagesPage;
  tab3Root = GithubPage;
  tab4Root = UserDetails;

  constructor() {
    
  }
}
