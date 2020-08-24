import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: any;
  arrPeliculas: [];
  buscador: FormGroup;

  constructor(private filmsService: FilmsService, private router: Router, private modal: NgbModal) {

    this.buscador = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      ano: new FormControl('', [
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ]),
    });

    this.filmsService.getFilms().subscribe((res) => {
      this.peliculas = res;
      this.arrPeliculas = this.peliculas.Search;
    });
  }

  ngOnInit() {
  }
  // FUNCIÓN PARA LA BUSQUEDA EN EL FORMULARIO
  onSubmit() {
    this.filmsService.getBuscar(this.buscador.value).subscribe((peli) => {
      this.arrPeliculas = [];
      this.peliculas = peli;
      this.arrPeliculas = this.peliculas.Search;
    });
  }
  // FUNCIÓN PARA RESETEAR LA BUSQUEDA
  reset() {
    this.arrPeliculas = [];
    this.filmsService.getFilms().subscribe((res) => {
      this.peliculas = res;
      this.arrPeliculas = this.peliculas.Search;
    });
  }
  // FUNCIÓN PARA ABRIR EL MODAL
  openLG(detalles) {
    this.modal.open(detalles, { size: 'lg' });
  }
  // FUNCION PARA MOSTRAR LOS DETALLES DE LA PELICULA EN EL MODAL
  detalleModal(titulo) {
    this.filmsService.getDetalleFilm(titulo).subscribe((res) => {
      this.peliculas = res;
    });
  }

}
