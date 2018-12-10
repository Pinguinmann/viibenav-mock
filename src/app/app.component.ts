import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router :Router
    ) {
      this.initializeApp();
    }

  public activeRoute :{url :string, name :string};

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    /* set global header with name from route data */
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.activeRoute = {
          url: data.state.root.firstChild.url[0].path,
          name: data.state.root.firstChild.data.name
        };
      }
    });
  }
}
