import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'movie',
    loadComponent: () =>
      import('./movies/pages/movie-listing-page/movie-listing-page').then(
        (c) => c.MovieListingPage
      ),
  },
  {
    path: 'movie/create',
    loadComponent: () =>
      import('./movies/pages/movie-create-page/movie-create-page').then((c) => c.MovieCreatePage),
  },
  {
    path: 'movie/:id/update',
    loadComponent: () =>
      import('./movies/pages/movie-update-page/movie-update-page').then((c) => c.MovieUpdatePage),
  },
  {
    path: 'user',
    loadComponent: () => import('./user/pages/user-index/user-index').then((c) => c.UserIndex),
  },
];
