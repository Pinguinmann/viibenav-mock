import { TestBed } from '@angular/core/testing';

import { DeviceorientationService } from './deviceorientation.service';

describe('DeviceorientationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceorientationService = TestBed.get(DeviceorientationService);
    expect(service).toBeTruthy();
  });
});
