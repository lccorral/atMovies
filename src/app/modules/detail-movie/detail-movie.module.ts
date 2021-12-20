import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DetailMovieComponent } from './detail-movie.component';
import { DetailMovieRoutingModule } from './detail-movie-routing.module';

import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    DetailMovieRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    SharedModule,
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
export class DetailMovieModule { }
