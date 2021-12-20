import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list.component';
// import { ErrorsModule } from '@jccm/core';

// export function errorDetalleRouting(): any { return ErrorsModule; };

const routes: Routes = [
  {
    path: 'search',
    component: MoviesListComponent,
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
export class MoviesListRoutingModule { }
