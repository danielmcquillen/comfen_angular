import { TestBed } from '@angular/core/testing';

import { ComfenLibService } from './comfen-lib.service';

describe('ComfenLibService', () => {
  let service: ComfenLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComfenLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
