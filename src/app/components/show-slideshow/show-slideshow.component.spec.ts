import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSlideshowComponent } from './show-slideshow.component';

describe('ShowSlideshowComponent', () => {
  let component: ShowSlideshowComponent;
  let fixture: ComponentFixture<ShowSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSlideshowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
