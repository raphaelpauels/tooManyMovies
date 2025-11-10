import { Routes } from '@angular/router';
import { MovieIndexPage } from './features/movies/pages/movie-index-page/movie-index-page';

export const routes: Routes = [
  {
    path: '',
    component: MovieIndexPage,
  },
  {
    path: 'movie',
    loadChildren: () => import('./features/movies/movies.routes').then((r) => r.routes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((r) => r.routes),
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.routes').then((r) => r.routes),
  },
];
