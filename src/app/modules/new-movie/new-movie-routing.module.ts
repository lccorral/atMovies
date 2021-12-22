import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMovieComponent } from './new-movie.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewMovieComponent
  },
  {
    path: '**',
    redirectTo: 'error',
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewMovieRoutingModule { }
