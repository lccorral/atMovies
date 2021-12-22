import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DetailMovieModule } from './modules/detail-movie/detail-movie.module';
import { EditMovieModule } from './modules/edit-movie/edit-movie.module';
import { MoviesListModule } from './modules/movies-list/movies-list.module';
import { NewMovieModule } from './modules/new-movie/new-movie.module';


export function MoviesListRouting(): any { return MoviesListModule; }
export function NewMovieRouting(): any { return NewMovieModule; }
export function DashboardRouting(): any { return DashboardModule; }
export function DetailMovieRouting(): any { return DetailMovieModule; }
export function EditMovieRouting(): any { return EditMovieModule; }

const routes: Routes = [
  {
    path: '',
    loadChildren: DashboardRouting
  },
  { path: '', component: AppComponent, pathMatch: 'full' },
  {
    path: 'movies',
    loadChildren: MoviesListRouting
  },
  {
    path: 'movies',
    loadChildren: NewMovieRouting
  },
  {
    path: 'movies',
    loadChildren: DetailMovieRouting
  },
  {
    path: 'movies',
    loadChildren: EditMovieRouting
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
