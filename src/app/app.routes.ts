import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'users',
    loadComponent: () =>
      import('./users-grid/users-grid').then((m) => m.UsersGrid),
  },
];