import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailMovieComponent } from './detail-movie.component';


const routes: Routes = [
  {
    path: 'view/:id',
    component: DetailMovieComponent,
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
export class DetailMovieRoutingModule { }
