import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* import { Router } from '@angular/router'; */

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  url: string;

  constructor(private httpClient: HttpClient) {

    this.url = 'http://www.omdbapi.com/?apikey=5dea4e9e&';

  }

  getFilms() {
    return this.httpClient.get<any[]>(this.url + 's=star');
  }

  getDetalleFilm(titulo) {
    if (titulo !== 'null') {
      return this.httpClient.get(this.url + `t=${titulo}`);
    }
  }

  getBuscar(buscar) {
    if (buscar.ano === '') {
      return this.httpClient.get(this.url + `s=${buscar.titulo}`);
    } else {
      return this.httpClient.get(this.url + `s=${buscar.titulo}&y=${buscar.ano}`);
    }
  }
}