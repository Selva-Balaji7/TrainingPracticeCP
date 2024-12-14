import { TestBed } from '@angular/core/testing';

import { ItemsservicesService } from './itemsservices.service';

describe('ItemsservicesService', () => {
  let service: ItemsservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
