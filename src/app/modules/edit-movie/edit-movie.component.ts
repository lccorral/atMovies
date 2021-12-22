import { Component, OnInit, Inject, ViewChild, OnDestroy  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, Subscription } from 'rxjs';
import { Actor, Company, Movie } from '../../models/models';
import { ApiRestService } from '../../services/api-rest.service';
import { ChipsAutocompleteComponent } from 'src/app/components/chips-autocomplete/chips-autocomplete.component';
import { ActivatedRoute } from '@angular/router';

import * as TRANSLATIONS from '../../../assets/i18n/es.json';
import { GENRE } from '../../data/genre';

@Component({
  selector: 'edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['../../scss/form.scss', './edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit, OnDestroy {
  @ViewChild('chipActors') chipActors: ChipsAutocompleteComponent;
  @ViewChild('chipGenres') chipGenres: ChipsAutocompleteComponent;

  formGroup: FormGroup;
  post: Movie;

  id: number;
  movie: Movie;
  actorsLoaded: number[];
  company: Company;
  actorsFinished = false;
  compayFinished = false;

  isLoadingResults = true;
  allCategoryValues: {key: string; value: string}[] = GENRE;
  ACTORS: Actor[] = [];

  allActorsValues: { key: number, value: string }[] = [];

  studios: Company[] = [];
  postMoviesSubscription: Subscription;
  getActorsAllSubscription: Subscription;
  getActorsSubscription: Subscription;

constructor(
  @Inject(TranslateService) translate: TranslateService,
  private readonly apiRestService: ApiRestService,
  private formBuilder: FormBuilder,
  private readonly rutaActiva: ActivatedRoute,
  private snackBar: MatSnackBar
) {
  translate.addLangs(['es']);
  translate.setDefaultLang('es');
}

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy(): void {
    if (this.getActorsAllSubscription) {
      this.getActorsAllSubscription.unsubscribe();
    }
  }

  get title() {
    return this.formGroup.get('title') as FormControl
  }

  get poster() {
    return this.formGroup.get('poster') as FormControl
  }

  get genre() {
    return this.formGroup.get('genre') as FormControl
  }

  get actors() {
    return this.formGroup.get('actors') as FormControl
  }

  get studio() {
    return this.formGroup.get('studio') as FormControl
  }

  get year() {
    return this.formGroup.get('year') as FormControl
  }

  get duration() {
    return this.formGroup.get('duration') as FormControl
  }

  get imdbRating() {
    return this.formGroup.get('imdbRating') as FormControl
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'title': [null, Validators.required],
      'poster': [null, Validators.required],
      'genre': [null, Validators.required],
      'actors': [null, Validators.required],
      'studio': [null, Validators.required],
      'year': [null, Validators.required],
      'duration': [null, Validators.required],
      'imdbRating': [null, Validators.required]
    });
    this.loadForm();
  }

  loadForm(): void {

    this.actorsLoaded = [];
    this.rutaActiva?.params.subscribe((param) => {
      this.id = parseInt(param.id);

      forkJoin([
        this.apiRestService.getMovie$(this.id),
        this.apiRestService.getCompanies$(),
        this.apiRestService.getActors$()]).subscribe(
        (respuestaFork: any) => {
          this.movie = respuestaFork[0];
          this.company = respuestaFork[1].find(c => {
            this.compayFinished = true;
            return c.name.includes(this.movie.studio);
          });
          this.studios = respuestaFork[1].map(item =>
            {
              return {
                key:item.id,
                name: item.name
              };
            });
          this.allActorsValues = respuestaFork[2].map(item =>
            {
              return {
                key:item.id,
                value: item.first_name + ' ' + item.last_name
              };
            });

          if (this.movie.actors?.length > 0) {
            this.movie.actors.forEach((element, key, arr) => {

              this.getActorsSubscription = this.apiRestService.getActor$(element)
                .subscribe((response: Actor) => {
                  this.actorsLoaded.push(response.id);
                  if (Object.is(arr.length - 1, key)) {
                    this.actorsFinished = true;
                    this.formGroup.patchValue({
                      title: this.movie.title,
                      poster: this.movie.poster,
                      genre: this.movie.genre,
                      actors: this.actorsLoaded,
                      studio: this.company?.name,
                      year: this.movie.year,
                      duration: this.movie.duration,
                      imdbRating: this.movie.imdbRating
                    });
                    if (this.compayFinished && this.actorsFinished) {
                      this.isLoadingResults = false;
                    }
                  }
                },
                () => {
                  this.isLoadingResults = false;
                  this.snackBar.open(TRANSLATIONS.ERROR.ERROR_MOVIES, TRANSLATIONS.ERROR.CLOSE,  {
                    duration: 10000,
                    verticalPosition: 'top'
                  });
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

  onSubmit(post) {
    this.post = post;
    console.log(this.post);

    if (this.formGroup.valid) {
      this.isLoadingResults = true;
      this.postMoviesSubscription = this.apiRestService.putMovie$(this.id, this.post)
        .subscribe((data: Movie) => {
          console.log(data);
          this.snackBar.open(TRANSLATIONS.HOME.SNACKBAR_OK, TRANSLATIONS.ERROR.CLOSE, {
            duration: 10000,
            verticalPosition: 'top'
          });
          this.ngOnInit();
        },
        () => {
          this.isLoadingResults = false;
          this.snackBar.open(TRANSLATIONS.ERROR.ERROR_MOVIES, TRANSLATIONS.ERROR.CLOSE, {
            duration: 10000,
            verticalPosition: 'top'
          });
        });
    } else {
      if (!this.post.actors || this.post.actors.length === 0) {
        this.chipActors.touched = true;
      }
      if (!this.post.genre || this.post.genre.length === 0) {
        this.chipGenres.touched = true;
      }
    }
  }

}
