import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/movie-index-page/movie-index-page').then((c) => c.MovieIndexPage),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/movie-details-page/movie-details-page').then((c) => c.MovieDetailsPage),
  },
];
