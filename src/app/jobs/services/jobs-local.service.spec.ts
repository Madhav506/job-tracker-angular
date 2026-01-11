import { TestBed } from '@angular/core/testing';

import { JobsLocalService } from './jobs-local.service';

describe('JobsLocalServiceTsService', () => {
  let service: JobsLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
