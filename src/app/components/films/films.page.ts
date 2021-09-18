import { FilmService, searchType } from './../../services/film.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../../model/film.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  results: Observable<any>;
  textSearch: string  = '';
  type: searchType = searchType.movie;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
  }

  searchChanged(): void{
    this.results = this.filmService.searchFilms(this.textSearch, this.type);
  }
}
