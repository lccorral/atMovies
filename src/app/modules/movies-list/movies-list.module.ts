import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { MoviesListRoutingModule } from './movies-list-routing.module';

import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    MoviesListRoutingModule,
    MatCardModule,
    MatIconModule
  ], providers: [
    DatePipe
  ]
})
export class MoviesListModule { }
