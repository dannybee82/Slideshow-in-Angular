import { Injectable } from '@angular/core';
import { SlideshowImage } from '../models/slideshow-image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideshowImageService {

  private _images: SlideshowImage[] = [
    new SlideshowImage(0, '../assets/images/image_001.jpg', 'Image 001'),
    new SlideshowImage(1, '../assets/images/image_002.jpg', 'Image 002'),
    new SlideshowImage(2, '../assets/images/image_003.jpg', 'Image 003'),
    new SlideshowImage(3, '../assets/images/image_004.jpg', 'Image 004'),
    new SlideshowImage(4, '../assets/images/image_005.jpg', 'Image 005'),
  ];

  public getAllImages() : Observable<SlideshowImage[]> {
    return new Observable<SlideshowImage[]>(observer => {          
      observer.next(this._images);
      observer.complete();
    });
  }

}