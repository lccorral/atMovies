
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from  '../.././modules/material.module';

import { NewMovieComponent } from './new-movie.component';
import { NewMovieRoutingModule } from './new-movie-routing.module';
import { ChipsAutocompleteComponent } from 'src/app/components/chips-autocomplete/chips-autocomplete.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from 'src/app/shared/shared.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    NewMovieComponent,
    ChipsAutocompleteComponent
  ],
  imports: [
    NewMovieRoutingModule,
    CommonModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
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
