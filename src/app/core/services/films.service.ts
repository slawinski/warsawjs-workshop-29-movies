import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { Film } from '../../films/film';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private moviesUrl = 'http://localhost:3000/movies';
  constructor(private httpClient: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.moviesUrl);
  }

  getFilmById(index): Observable<Film> {
    return this.httpClient.get<Film>(this.moviesUrl + `/${index}`);
  }

  addFilm(film: Film) {
    this.httpClient.post(this.moviesUrl, film).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  updateFilm(index: number, film: Film) {
    return this.httpClient.put(this.moviesUrl + `/${index}`, film);
  }
  deleteFilm(index) {
    return this.httpClient.delete(this.moviesUrl + `/${index}`);
  }
}
