import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  constructor(
    private navCtrl :NavController,
    private speechRecognition :SpeechRecognition
  ) {}

  public searchForm :FormGroup = new FormGroup({
    searchRequest: new FormControl('', Validators.required)
  });

  public checkPermission() {
    this.speechRecognition.hasPermission().then(
      (hasPermission :boolean) => {
        if(!hasPermission) {
          this.speechRecognition.requestPermission().then(
            (allowed :void) => {
              this.startListening();
            },
            (denied :void) => {
              console.error('User denied permission.');
            });
        } else {
          this.startListening();
        }
      }
    );
  }

  private startListening() {
    const options = {
      language: 'de-DE'
    };
    this.speechRecognition.startListening(options).subscribe(
      (matches :string[]) => {
        this.searchForm.get('searchRequest').setValue(matches[0]);
      },
      (error) => {
        console.error(error);
      });
  }

  public showResults() {
    const searchRequest :string = this.searchForm.get('searchRequest').value;
    if(this.searchForm.valid) {
      this.navCtrl.navigateForward(['/search-results'], true, {
        queryParams: { search: searchRequest }
      });
    }
  }

}
