import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./components/show-slideshow/show-slideshow').then(c => c.ShowSlideshow)
    }
];
