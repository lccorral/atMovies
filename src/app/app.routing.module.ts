import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/home/dashboard.component';
import { MoviesListModule } from './modules/movies-list/movies-list.module';


export function MoviesListRouting(): any { return MoviesListModule; }
// export function errorDetalle(): any { return ErrorsModule; }

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '', component: AppComponent, pathMatch: 'full' },
  {
    path: 'movies/search',
    loadChildren: MoviesListRouting,
    // canActivate: [CanAuthenticationGuard]
  },
  // {
  //   path: 'error',
  //   loadChildren: errorDetalle
  // },
  {
    path: '**',
    redirectTo: 'error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [LoginGuard],
})
export class AppRoutingModule {}
