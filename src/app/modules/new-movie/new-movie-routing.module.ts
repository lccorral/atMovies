import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMovieComponent } from './new-movie.component';

// export function errorNuevo(): any { return ErrorsModule; };

const routes: Routes = [
  {
    path: 'new',
    component: NewMovieComponent
  },
  // {
  //   path: 'error',
  //   loadChildren: errorNuevo,
  // },
  {
    path: '**',
    redirectTo: 'error',
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewMovieRoutingModule { }
