import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

// export function errorDetalleRouting(): any { return ErrorsModule; };

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
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
export class DashboardRoutingModule { }
