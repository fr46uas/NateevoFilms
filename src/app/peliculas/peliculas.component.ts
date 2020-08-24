import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { FormsModule, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: any;
  arrPeliculas: [];
  formBuscar: FormGroup;

  constructor(private filmsService: FilmsService) {

    this.filmsService.getFilms().subscribe((res) => {
      this.peliculas = res;
      this.arrPeliculas = this.peliculas.Search;


    });

  }

  ngOnInit() {
  }

  tituloFilm(titulo) {
    this.filmsService.getDetalleFilm(titulo).subscribe((res) => {
      this.peliculas = res;
    });
  }

  buscar(formData) {
    this.filmsService.getBuscar(formData).subscribe((peli) => {
      this.arrPeliculas = [];
      this.peliculas = peli;
      this.arrPeliculas = this.peliculas.Search;
      console.log(this.arrPeliculas.length);
      console.log(this.arrPeliculas);
    });

  }

  reset() {
    this.arrPeliculas = [];
    this.filmsService.getFilms().subscribe((res) => {

      this.peliculas = res;
      this.arrPeliculas = this.peliculas.Search;

    });
  }

}
