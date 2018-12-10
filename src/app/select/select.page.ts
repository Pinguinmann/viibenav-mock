import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { Room } from '../room-list';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['../share/scss/room-list.scss', './select.page.scss'],
})
export class SelectPage implements OnInit {

  constructor(
    private dataStore :DataStoreService,
    private navCtrl :NavController
  ) { }

  roomList :Room[];

  ngOnInit() {
    this.roomList = this.dataStore.roomList;
  }

  startNavigation() {
    this.navCtrl.navigateForward(['/navigation']);
  }

}
