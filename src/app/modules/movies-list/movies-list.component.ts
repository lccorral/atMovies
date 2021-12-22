import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { ApiRestService } from '../../services/api-rest.service';
import { Subscription } from 'rxjs';

import * as TRANSLATIONS from '../../../assets/i18n/es.json';
import { Movie } from '../../models/models';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['../../scss/detail.scss', './movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  isLoadingResults = true;
  getMoviesSubscription: Subscription;
  movies: Movie[];

  constructor(
    @Inject(TranslateService) translate: TranslateService,
    @Inject(Location) private location: Location,
    @Inject(ApiRestService) private apiRestService: ApiRestService,
    private snackBar: MatSnackBar
  ) {
    translate.addLangs(['es']);
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    // this.isLoadingResults = true;

    this.getMoviesSubscription = this.apiRestService.getMovies$()
    .subscribe((data: Movie[]) => {
      this.movies = data;
      console.log(data);
      this.isLoadingResults = false;
    },
    () => {
      this.isLoadingResults = false;
      this.snackBar.open(TRANSLATIONS.ERROR.ERROR_MOVIES, TRANSLATIONS.ERROR.CLOSE,  {
        duration: 10000,
        verticalPosition: 'top'
      });
    });
  }

  ngOnDestroy(): void {
    if (this.getMoviesSubscription) {
      this.getMoviesSubscription.unsubscribe();
    }
  }

  back(): void{
    this.location.back(); // <-- go back to previous location on cancel
  }

}
