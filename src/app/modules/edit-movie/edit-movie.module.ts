
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from  '../.././modules/material.module';

import { EditMovieComponent } from './edit-movie.component';
import { EditMovieRoutingModule } from './edit-movie-routing.module';

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
    EditMovieComponent
  ],
  imports: [
    EditMovieRoutingModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    MatProgressSpinnerModule,
    ChipsAutoCompleteModule,
    ReactiveFormsModule,
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
  bootstrap: [EditMovieComponent]
})
export class EditMovieModule { }
