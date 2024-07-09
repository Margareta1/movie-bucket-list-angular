import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieStorageService } from './services/movie-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesListComponent,
    AddMovieComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [AuthService, AuthGuard, MovieStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
