import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceorientationService {

  constructor() { }

  public orientationHandler :Subject<DeviceOrientationEvent> = new Subject();

  setupListening() {
    window.addEventListener("deviceorientation", (event) => {
      this.handleOrientation(event);
    }, true);
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation no need for ionic device-orientation plugin
  handleOrientation(event :DeviceOrientationEvent) {
    this.orientationHandler.next(event);
  }

  destroyListener() {
    window.removeEventListener("deviceorientation", () => {});
  }

}
