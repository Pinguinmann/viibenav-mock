import { TestBed } from '@angular/core/testing';

import { TextToSpeechService } from './text-to-speech.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

describe('TextToSpeechService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TextToSpeech
    ]
  }));

  it('should be created', () => {
    const service: TextToSpeechService = TestBed.get(TextToSpeechService);
    expect(service).toBeTruthy();
  });
});
