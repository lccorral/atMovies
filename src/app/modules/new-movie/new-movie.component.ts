import { Component, OnInit, Inject  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Actor, Movie } from '../../models/models';
import { ApiRestService } from '../../services/api-rest.service';

import * as TRANSLATIONS from '../../../assets/i18n/es.json';

@Component({
  selector: 'new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {
  formGroup: FormGroup;
  post: Movie;

  isLoadingResults = false;
  allCategoryValues: {key: string; value: string}[] = [
    {
      key: 'Comedy',
      value: 'Comedia'
    },
    {
      key: 'Musical',
      value: 'Musical'
    },
    {
      key: 'Romance',
      value: 'Romance'
    }
  ];
  ACTORS: Actor[] = [
    {
      "id": 1,
      "first_name": "Isaak",
      "last_name": "McQuode",
      "gender": "Male",
      "bornCity": "Ciduren",
      "birthdate": "24/12/1957",
      "img": "http://dummyimage.com/600x400.png/dddddd/000000",
      "rating": 2.03,
      "movies": [3, 7]
    }
  ];

  allActorsValues: { key: number, value: string }[] = [];

  studios = [
    {
      name: 'Fox',
    },
    {
      name: 'Marvel',
    }
  ];
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

  ngOnInit() {
    this.allActorsValues = this.ACTORS.map(item =>
      {
        const format = {
          key:item.id,
          value: item.first_name + ' ' + item.last_name
        };
        return format;
      });

    this.createForm();
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
  }

  onSubmit(post) {
    this.post = post;
    console.log(this.post);


    this.postMoviesSubscription = this.apiRestService.postMovie$(this.post)
    .subscribe((data: Movie) => {
      console.log(data);
      this.isLoadingResults = false;
      this.snackBar.open(TRANSLATIONS.HOME.SNACKBAR_OK, TRANSLATIONS.ERROR.CLOSE,  {
        duration: 10000,
        verticalPosition: 'top'
      });
      this.formGroup.reset();
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
