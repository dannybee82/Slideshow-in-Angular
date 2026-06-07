import { Service } from '@angular/core';
import { SlideshowImageInterface } from '../models/slideshow-image';
import { Observable } from 'rxjs';

@Service()
export class SlideshowImage {

  private _images: SlideshowImageInterface[] = [
    {id: 0, image: '../assets/images/image_001.jpg', title: 'Image 001', width: 1956, height: 4128},
    {id: 1, image: '../assets/images/image_002.jpg', title: 'Image 002', width: 4128, height: 1956},
    {id: 2, image: '../assets/images/image_003.jpg', title: 'Image 003', width: 4128, height: 1956},
    {id: 3, image: '../assets/images/image_004.jpg', title: 'Image 004', width: 4128, height: 1956},
    {id: 4, image: '../assets/images/image_005.jpg', title: 'Image 005', width: 4128, height: 1956},
    {id: 5, image: '../assets/images/image_006.jpg', title: 'Image 006', width: 1956, height: 4128},
  ];

  public getAllImages(): Observable<SlideshowImageInterface[]> {
    return new Observable<SlideshowImageInterface[]>(observer => {          
      observer.next(this._images);
      observer.complete();
    });
  }

}