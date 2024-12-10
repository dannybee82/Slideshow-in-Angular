import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('../app/components/show-slideshow/show-slideshow.component').then(c => c.ShowSlideshowComponent)
    }
];
