import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Film } from 'src/app/films/film';
import { FilmsService } from '../../core/services/films.service';
import { Params, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {
  filmForm: FormGroup;
  id: number;
  film: Film;
  errorMessages = '';
  constructor(private filmsService: FilmsService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.filmForm = fb.group({
      title: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      numberInStock: new FormControl('', Validators.required),
      dailyRentalRate: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getFilmById();
    });
  }

  getFilmById() {
    this.filmsService.getFilmById(this.id).subscribe(
      data => {
        this.film = data as Film;
        this.initForm();
      },
      error => this.errorMessages = error);
  }


  private initForm() {
    const title = this.film.title;
    const genre = this.film.genre;
    const numberInStock = this.film.numberInStock;
    const dailyRentalRate = this.film.dailyRentalRate;
    const imageUrl = this.film.imageUrl;

    this.filmForm = new FormGroup({
      title: new FormControl(title, Validators.required),
      genre: new FormControl(genre, Validators.required),
      numberInStock: new FormControl(numberInStock, Validators.required),
      dailyRentalRate: new FormControl(dailyRentalRate, Validators.required),
      imageUrl: new FormControl(imageUrl, Validators.required),
    });
  }

  onSubmit() {
    if (this.filmForm.invalid) {
      return;
    }
    this.filmsService.updateFilm(this.id, this.filmForm.value as Film).subscribe();
  }

}
