import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list.component';

const routes: Routes = [
  {
    path: 'search',
    component: MoviesListComponent,
  },
  {
    path: '**',
    redirectTo: 'error',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesListRoutingModule { }
