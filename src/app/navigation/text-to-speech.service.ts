import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { TTSOptionsStub } from './tts-options-stub';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  constructor(private tts :TextToSpeech) { }

  private options :TTSOptionsStub = {
    locale: 'de-DE',
    rate: 1,
  };

  public speak(text :string, success?) {
    const successHandler = success || (() => {});

    this.tts.speak({...this.options, text: text}).then(() => { successHandler(); })
      .catch((reason :any) => { console.error(reason); });
  }

}
