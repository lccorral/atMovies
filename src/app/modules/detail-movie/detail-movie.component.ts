import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiRestService } from '../../services/api-rest.service';
import { forkJoin, Subscription } from 'rxjs';
import { Actor, Company, Movie } from '../../models/models';
import { MatSnackBar } from '@angular/material/snack-bar';

import * as TRANSLATIONS from '../../../assets/i18n/es.json';

@Component({
  selector: 'detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  id: number;
  movie: Movie;
  actors: Actor[];
  company: Company;
  isLoadingResults = true;
  actorsFinished = false;
  compayFinished = false;
  getMoviesSubscription: Subscription;
  getActorsSubscription: Subscription;
  getCompaniesSubscription: Subscription;
  math = Math;

  constructor(
    @Inject(TranslateService) translate: TranslateService,
    @Inject(Location) private location: Location,
    private readonly apiRestService: ApiRestService,
    private snackBar: MatSnackBar,
    private readonly rutaActiva: ActivatedRoute
  ) {
    translate.addLangs(['es']);
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.actors = [];
    this.rutaActiva?.params.subscribe((param) => {
      this.id = parseInt(param.id);

      forkJoin([
        this.apiRestService.getMovie$(this.id),
        this.apiRestService.getCompanies$()]).subscribe(
        (respuestaFork: any) => {
          this.movie = respuestaFork[0];
          this.company = respuestaFork[1].find(c => {
            this.compayFinished = true;
            return c.movies.includes(this.id);
          });

          if (this.movie.actors?.length > 0) {
            this.movie.actors.forEach((element, key, arr) => {

              this.getActorsSubscription = this.apiRestService.getActor$(element)
                .subscribe(response => {
                  this.actors.push(response);
                  if (Object.is(arr.length - 1, key)) {
                    this.actorsFinished = true;
                    if (this.compayFinished && this.actorsFinished) {
                      this.isLoadingResults = false;
                    }
                  }
                },
                () => {
                  // this.loading = false;
                  // this.dataLoaded = false;
                });
            });
          } else {
            this.actorsFinished = true;
          }
        }, error => {
          console.error(error);
          this.isLoadingResults = false;
        } );
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

  deleteMovie(): void{
    this.getMoviesSubscription = this.apiRestService.deleteMovie$(this.id)
    .subscribe(() => {
      this.isLoadingResults = false;
      this.snackBar.open(TRANSLATIONS.HOME.SNACKBAR_OK, TRANSLATIONS.ERROR.CLOSE,  {
        duration: 10000,
        verticalPosition: 'top'
      });
      this.back();
    },
    () => {
      // this.dataLoaded = false;
      this.isLoadingResults = false;
      this.snackBar.open(TRANSLATIONS.ERROR.ERROR_MOVIES, TRANSLATIONS.ERROR.CLOSE,  {
        duration: 10000,
        verticalPosition: 'top'
      });
    });
  }

}
