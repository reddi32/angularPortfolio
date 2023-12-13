import { TestBed } from '@angular/core/testing';

import { VisitromeResolver } from './visitrome.resolver';

describe('VisitromeResolver', () => {
  let resolver: VisitromeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(VisitromeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
