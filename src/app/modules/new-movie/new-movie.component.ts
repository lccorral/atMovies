import { Component, OnInit, Inject, ViewChild, OnDestroy  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, Subscription } from 'rxjs';
import { Actor, Company, Movie } from '../../models/models';
import { ApiRestService } from '../../services/api-rest.service';
import { ChipsAutocompleteComponent } from '../../components/chips-autocomplete/chips-autocomplete.component';

import * as TRANSLATIONS from '../../../assets/i18n/es.json';
import { GENRE } from '../../data/genre';

@Component({
  selector: 'new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['../../scss/form.scss', './new-movie.component.scss']
})
export class NewMovieComponent implements OnInit, OnDestroy {
  @ViewChild('chipActors') chipActors: ChipsAutocompleteComponent;
  @ViewChild('chipGenres') chipGenres: ChipsAutocompleteComponent;

  formGroup: FormGroup;
  post: Movie;

  isLoadingResults = true;
  allCategoryValues: {key: string; value: string}[] = GENRE;
  ACTORS: Actor[] = [];

  allActorsValues: { key: number, value: string }[] = [];

  studios: Company[] = [];
  getActorsAllSubscription: Subscription;
  postMoviesSubscription: Subscription;

constructor(
  @Inject(TranslateService) translate: TranslateService,
  private readonly apiRestService: ApiRestService,
  private formBuilder: FormBuilder,
  private snackBar: MatSnackBar
) {
  translate.addLangs(['es']);
  translate.setDefaultLang('es');

  // const browserLang = translate.getBrowserLang();
  // translate.use(browserLang.match(/es/) ? browserLang : 'es');
  // translate.use('es');
}

  ngOnInit(): void {
    forkJoin([
      this.apiRestService.getActors$(),
      this.apiRestService.getCompanies$()]).subscribe(
      (respuestaFork: any) => {
        this.allActorsValues = respuestaFork[0].map(item =>
          {
            const format = {
              key:item.id,
              value: item.first_name + ' ' + item.last_name
            };
            return format;
          });

        this.studios = respuestaFork[1].map(item =>
          {
            const format = {
              key:item.id,
              name: item.name
            };
            return format;
          });
        this.createForm();
      }, error => {
        console.error(error);
        this.isLoadingResults = false;
      } );
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
    this.isLoadingResults = false;
  }

  onSubmit(post) {
    this.post = post;
    console.log(this.post);

    if (this.formGroup.valid) {
      this.postMoviesSubscription = this.apiRestService.postMovie$(this.post)
        .subscribe((data: Movie) => {
          console.log(data);
          this.isLoadingResults = false;
          this.snackBar.open(TRANSLATIONS.HOME.SNACKBAR_OK, TRANSLATIONS.ERROR.CLOSE, {
            duration: 10000,
            verticalPosition: 'top'
          });
          this.formGroup.reset();
        },
        () => {
          // this.dataLoaded = false;
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
