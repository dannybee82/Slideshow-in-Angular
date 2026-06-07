import { TestBed } from '@angular/core/testing';
import { SlideshowImage } from './slideshow-image';
import { describe, beforeEach, it, expect } from 'vitest';

describe('SlideshowImageService', () => {
  let service: SlideshowImage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideshowImage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});