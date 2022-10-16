import { TestBed } from '@angular/core/testing';

import { HttpClientServicesService } from './http-client-services.service';

describe('HttpClientServicesService', () => {
  let service: HttpClientServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
