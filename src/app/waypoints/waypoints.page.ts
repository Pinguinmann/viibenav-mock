import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataStoreService } from '../data-store.service';
import { Waypoint } from '../waypoints';

@Component({
  selector: 'app-waypoints',
  templateUrl: './waypoints.page.html',
  styleUrls: ['./waypoints.page.scss'],
})
export class WaypointsPage implements OnInit {

  constructor(
    private navCtrl :NavController,
    private dataStore :DataStoreService
  ) { }

  waypoints :Waypoint[] = [];

  ngOnInit() {
    this.waypoints = this.dataStore.waypoints;
  }



}
