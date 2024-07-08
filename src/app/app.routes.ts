import { Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'movies-list', component: MoviesListComponent },
      { path: 'create', component: AddMovieComponent },
      { path: '', redirectTo: 'movies-list', pathMatch: 'full' },
      { path: '**', redirectTo: 'movies-list', pathMatch: 'full' },
    ],
  },
];

export { routes };
