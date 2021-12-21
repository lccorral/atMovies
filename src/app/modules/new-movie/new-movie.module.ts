
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from  '../.././modules/material.module';
import { NewMovieComponent } from './new-movie.component';
import { NewMovieRoutingModule } from './new-movie-routing.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '../../shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChipsAutoCompleteModule } from '../chipsAutocomplete.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    NewMovieComponent
  ],
  imports: [
    NewMovieRoutingModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ChipsAutoCompleteModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [NewMovieComponent]
})
export class NewMovieModule { }
