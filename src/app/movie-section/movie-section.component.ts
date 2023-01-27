import { Component, OnInit } from '@angular/core';
import { ListMoviesService } from './list-movies.service';
import { Target } from './target';
import SwiperCore from 'swiper';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.css']
})
export class MovieSectionComponent {

  constructor(private listMoviesService: ListMoviesService) {}

  targetMovies: Target[] = [];
  selectedMovie?: Target;

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movi: Target): void {
    this.selectedMovie = movi;
  }

  getMovies(): void {
    this.listMoviesService.getMovies()
        .subscribe(targetMovies => this.targetMovies = targetMovies);
  }

 

}
