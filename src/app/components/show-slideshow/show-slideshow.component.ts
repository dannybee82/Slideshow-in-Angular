import { Component, OnInit, WritableSignal, signal, inject } from '@angular/core';
import { SlideshowImageService } from '../../services/slideshow-image.service';
import { SlideshowImage } from '../../models/slideshow-image';
import { Observer, Subscription, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-show-slideshow',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './show-slideshow.component.html',
  styleUrl: './show-slideshow.component.scss',
  providers: [
    SlideshowImageService
  ]
})
export class ShowSlideshowComponent implements OnInit {

  private _observer: Observer<any> = {
    next: (result) => {
      if(result && this.slideShowRunning()) {
        this.currentImage.set(result);
      }
    },
    error: () => {},
    complete: () => {
      this.startSlideShow(false);
    }
  };

  protected currentImage: WritableSignal<SlideshowImage | null> = signal(null);
  protected slideShowRunning: WritableSignal<boolean> = signal(true);
  private _subscription: Subscription = new Subscription();
  private _lastImageId: number = -1;
  
	private slideshowImageService = inject(SlideshowImageService);

  ngOnInit(): void {
    this.startSlideShow(true);
  }

  startSlideShow(firstStart: boolean): void {
    if(this._subscription) {
      this._subscription.unsubscribe();
    }

    const slideShow$ = this.slideshowImageService.getAllImages().pipe(   
      map(items => {
        if(!this.slideShowRunning()) {
          return of();
        }

        return items;
      }),
      mergeMap((items) => from(items)),
      concatMap(items => {
        return (firstStart) ? of(items) : of(items).pipe(delay(3000));
      })
    );

    this._subscription = slideShow$.subscribe(this._observer);
  }

  pauseOrPlay(): void {
    this._lastImageId = this.currentImage()?.id ?? -1;

    if(this.slideShowRunning()) {
      this.slideShowRunning.set(false);     

      if(this._subscription) {
        this._subscription.unsubscribe();
      }
    } else {
      this.slideShowRunning.set(true);
      this.continueSlideShow();
    }
  }

  continueSlideShow(): void {
    const slideShow$ = this.slideshowImageService.getAllImages().pipe(
      map(items => {
        if(!this.slideShowRunning()) {
          return of();
        }

        return items.filter(item => item.id > this._lastImageId);
      }),
      mergeMap((items) => from(items)),
      concatMap(items => of(items).pipe(delay(3000)))
    );

    this._subscription = slideShow$.subscribe(this._observer);
  }

  previousOrNext(isNext: boolean): void {
    this.slideShowRunning.set(false);

    if(this._subscription) {
      this._subscription.unsubscribe();
    }

    this._lastImageId = this.currentImage()?.id ?? -1;
    let nextId: number = (isNext) ? this._lastImageId + 1 : this._lastImageId - 1;

    const slideshowImage$ = this.slideshowImageService.getAllImages().pipe(
      map(items => {
        let ids: number[] = [];

        items.forEach(item => ids.push(item.id));

        let maxId: number = Math.max(...ids);

        if(nextId < 0) {
          nextId = maxId;
        }

        if(nextId > maxId) {
          nextId = 0;
        }
        
        let item: SlideshowImage | undefined = items.find(item => item.id == nextId);
        
        return (item != undefined) ? item : items[0];     
      })
    );

    slideshowImage$.subscribe({
      next: (result) => {
        this.currentImage.set(result);
      }
    });
  }

}