import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },

  { path: 'buscador', component: PeliculasComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
