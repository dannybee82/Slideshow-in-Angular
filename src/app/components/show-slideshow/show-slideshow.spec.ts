import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowSlideshow } from './show-slideshow';
import { describe, beforeEach, it, expect } from 'vitest';

describe('ShowSlideshowComponent', () => {
  let component: ShowSlideshow;
  let fixture: ComponentFixture<ShowSlideshow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSlideshow]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSlideshow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});