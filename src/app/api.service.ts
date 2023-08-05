import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Movie } from './types/movie';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMovie(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Movie>(`${apiUrl}/movies/${id}`);
  }
  //  getMovies() {
  //   const {apiUrl} = environment
  //   return this.http.get<Movie[]>(`${apiUrl}/movies`);
  //  }

   getMovies(limit?: number) {
    const {apiUrl} = environment
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get<Movie[]>(`${apiUrl}/movies${limitFilter}`);
   }

   createMovie(movieName: string, movieGenre: string, movieProducer: string, movieText: string) {
    return this.http.post<Movie>('/api/movies', { movieName, movieGenre, movieProducer, movieText });
  }
  
  getPosts(limit?: number) {
    const {apiUrl} = environment
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get<Post[]>(`${apiUrl}/posts${limitFilter}`);
   }
}
