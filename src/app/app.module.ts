import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { NewMovieComponent } from './movies/new-movie/new-movie.component';
import { FormsModule } from '@angular/forms';
import { MovieRoutingModule } from './movies/movies-routing.module';
import { MovieComponent } from './movies/movie/movie.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { MyMoviesComponent } from './movies/my-movies/my-movies.component';
import { UserModule } from './user/user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { NotFoundComponent } from './not-found/not-found.component';

/* import { appInterceptorProvider } from './app-interceptor'; */

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MoviesComponent,
    HomeComponent,
    MovieCardComponent,
    NewMovieComponent,
    MovieComponent,    
    NavigationComponent,
    MyMoviesComponent,
    HeaderComponent,
    FooterComponent,
    //NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MovieRoutingModule,
    FormsModule,
    UserModule,
  ],
  providers: [
    /* appInterceptorProvider */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
