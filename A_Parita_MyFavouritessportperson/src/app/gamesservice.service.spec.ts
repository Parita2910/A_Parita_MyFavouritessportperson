import { TestBed } from '@angular/core/testing';

import { GamesserviceService } from './gamesservice.service';

describe('GamesserviceService', () => {
  let service: GamesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
