import { Injectable } from '@angular/core';
import { Target } from './target';
import { MOVIES } from './mockmovies';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListMoviesService {

  getMovies(): Observable<Target[]> {
    const movies = of(MOVIES);
    return movies;
  }


  constructor() { }
}
