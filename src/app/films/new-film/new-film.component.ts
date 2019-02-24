import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Film } from 'src/app/films/film';
import { FilmsService } from '../../core/services/films.service';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.scss']
})
export class NewFilmComponent implements OnInit {
  filmForm: FormGroup;
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.filmForm = new FormGroup({
      title: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      numberInStock: new FormControl('', Validators.required),
      dailyRentalRate: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.filmForm.invalid) {
      return;
    }
    this.filmsService.addFilm(this.filmForm.value as Film);
  }
}
