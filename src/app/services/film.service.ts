
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Film } from '../model/film.interface';

// SOLO PELICULAS EN LA BUSQUEDA
export enum searchType {
  movie = 'movie'
}

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  private api: string = 'http://www.omdbapi.com/';
  private apiKey: string = 'e9cf0b58';
  private url: string = '';

  constructor(private http: HttpClient) { }

  searchFilms(title: string,type: searchType){
    this.url = (`${this.api}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`);
    // console.log(this.url);
    return this.http.get<Film>(this.url).pipe(
      map(results => results['Search'])
    );
  }
}
