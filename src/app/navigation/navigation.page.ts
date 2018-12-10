import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TextToSpeechService } from './text-to-speech.service';
import { DataStoreService } from '../data-store.service';
import { DeviceorientationService } from './deviceorientation.service';

import 'hammerjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit, OnDestroy {

  constructor(
    private navCtrl :NavController,
    private dataStore :DataStoreService,
    private tts :TextToSpeechService,
    private dos :DeviceorientationService
  ) { }

  public devOrientation :string = 'default';
  public rotateFactor :number = 0;

  ngOnInit() {
    this.dos.setupListening();
    this.dos.orientationHandler.subscribe((event :DeviceOrientationEvent) => {
      this.rotateFactor = event.gamma;
    });
  }

  showWaypoints() :void {
    this.navCtrl.navigateForward(['/waypoints']);
  }

  swiped(event) :void {
    switch(event.offsetDirection) {
      // right to left
      case 2:
        this.tts.speak(this.dataStore.waypoints[0].waypoint);
        break;

      // left to right
      case 4:
        this.tts.speak(this.dataStore.waypoints[1].waypoint);
        break;

      default: return;
    }
  }

  speakFirstWaypoint() :void {
    this.tts.speak(this.dataStore.waypoints[0].waypoint);
  }

  ngOnDestroy() {
    this.dos.destroyListener();
  }

}
