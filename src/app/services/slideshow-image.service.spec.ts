import { TestBed } from '@angular/core/testing';

import { SlideshowImageService } from './slideshow-image.service';

describe('SlideshowImageService', () => {
  let service: SlideshowImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideshowImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
