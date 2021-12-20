import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailMovieComponent } from './detail-movie.component';
// import { ErrorsModule } from '@jccm/core';

// export function errorDetalleRouting(): any { return ErrorsModule; };

const routes: Routes = [
  {
    path: 'view',
    component: DetailMovieComponent,
  },
  // {
  //   path: 'error',
  //   loadChildren: errorDetalleRouting
  // },
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
