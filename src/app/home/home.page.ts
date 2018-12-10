import { Component } from '@angular/core';
import { IHomeActions } from './home-actions.model';
import { NavController } from '@ionic/angular';
import { SearchPage } from '../search/search.page';
import { SelectPage } from '../select/select.page';
import { Page } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl :NavController) { }

  actions :IHomeActions[] = [
    {
      name: 'Suchen',
      externalSvg: false,
      iconName: 'search',
      pageName: 'search'
    },
    {
      name: 'Aus Liste wählen',
      externalSvg: false,
      iconName: 'list-box',
      pageName: 'select'
    }
  ];

  navigateTo(pageName :string) {
    this.navCtrl.navigateForward(`/${pageName}`);
  }

}
