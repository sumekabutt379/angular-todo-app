import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UsersGrid } from './users-grid/users-grid';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: UsersGrid },
];
