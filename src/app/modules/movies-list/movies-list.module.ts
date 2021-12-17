import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { MoviesListRoutingModule } from './movies-list-routing.module';


@NgModule({
  declarations: [
    MoviesListComponent,
    // ComunicacionDetalleEvidenciaComponent
  ],
  imports: [
    CommonModule,
    MoviesListRoutingModule
  ], providers: [
    DatePipe
  ]
})
export class MoviesListModule { }
