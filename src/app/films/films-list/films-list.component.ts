import { Component, OnInit } from '@angular/core';

import { Film } from '../film';
import { FilmsService } from '../../core/services/films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  public name = 'Films list';
  public films: Film[];
  public filmsDetailIsVisible = false;
  public errorMessages = '';

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.getFilms().subscribe(
      films => {
        this.films = films;
      },
      error => this.errorMessages = error
    );
  }

  public toggleFilmDetails(): void {
    this.filmsDetailIsVisible = !this.filmsDetailIsVisible;
  }
  public deleteFilm(filmId: number) {
    this.filmsService.deleteFilm(filmId).subscribe(
    );
  }
}
