import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar

  ) {
    this.sideMenu();
    this.initializeApp();
  }
  sideMenu() {
    this.navigate = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home'
      },
      {
        title: 'Admin',
        url: '/admin',
        icon: 'person'
      },
      {
        title: 'About App',
        url: '/aboutapp',
        icon: 'list'
      }
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }
}
