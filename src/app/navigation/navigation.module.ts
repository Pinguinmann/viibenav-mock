import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NavigationPage } from './navigation.page';
import { TextToSpeechService } from './text-to-speech.service';
import { DeviceorientationService } from './deviceorientation.service';

const routes: Routes = [
  {
    path: '',
    component: NavigationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NavigationPage],
  providers: [
    TextToSpeechService,
    DeviceorientationService
  ]
})
export class NavigationPageModule {}
