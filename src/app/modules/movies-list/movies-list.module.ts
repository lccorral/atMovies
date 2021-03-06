import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { MoviesListRoutingModule } from './movies-list-routing.module';
import { HttpClient } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    MoviesListRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ], providers: [
    DatePipe
  ]
})
export class MoviesListModule { }
