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
  i = 0;
  constructor(private listMoviesService: ListMoviesService) {}

  targetMovies: Target[] = [];
  selectedMovie?: Target;

   nVisibles : Target[] = [];
   

  ngOnInit(): void {
    this.getMovies();
    this.fillCards();
  }

  onSelect(movi: Target): void {
    this.selectedMovie = movi;
  }

  getMovies(): void {
    this.listMoviesService.getMovies()
        .subscribe(targetMovies => this.targetMovies = targetMovies);
  }

  fillCards(): void {
    if (this.nVisibles.length < 4) {
      this.nVisibles.push(this.targetMovies[this.i]);
    } else {
      this.nVisibles = this.nVisibles.slice(1);
      this.nVisibles.push(this.targetMovies[this.i]);
    }
    this.i = (this.i + 1) % this.targetMovies.length;
      
  }
  
  prevCard(): void {
    if (this.i === 0) {
      this.i = this.targetMovies.length - 1;
    } else {
      this.i--;
    }
    this.nVisibles.unshift(this.targetMovies[this.i]);
    this.nVisibles = this.nVisibles.slice(0, 4);
  }
  
  nextCard(): void {
    this.i = (this.i + 1) % this.targetMovies.length;
    if (this.nVisibles.length < 4) {
      this.nVisibles.push(this.targetMovies[this.i]);
    } else {
      this.nVisibles = this.nVisibles.slice(1);
      this.nVisibles.push(this.targetMovies[this.i]);
    }
  }
  

 

}
