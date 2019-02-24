import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { NewFilmComponent } from './films/new-film/new-film.component';
import { EditFilmComponent } from './film/edit-film/edit-film.component';

const routes: Routes = [
  { path: '', component: FilmsListComponent },
  { path: 'new', component: NewFilmComponent },
  { path: ':id', component: EditFilmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
