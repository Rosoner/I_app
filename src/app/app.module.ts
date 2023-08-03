import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MovieModule } from './movie/movie.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MoviesListComponent,
    PostsListComponent,
    HomeComponent,
    NotFoundComponent,
    AuthenticateComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    MovieModule,
    AppRoutingModule, 
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
