import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMovieComponent } from './edit-movie.component';


const routes: Routes = [
  {
    path: 'edit/:id',
    component: EditMovieComponent
  },
  {
    path: '**',
    redirectTo: 'error',
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditMovieRoutingModule { }
