import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder } from '@angular/forms';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { EditMovieComponent } from './edit-movie.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { ChipsAutocompleteComponent } from '../../components/chips-autocomplete/chips-autocomplete.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiRestService } from '../../services/api-rest.service';
import { ApiRestServiceMock } from '../../../../test-mocks';
import { from } from 'rxjs';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


describe('EditMovieComponent', () => {
  let component: EditMovieComponent;
  let fixture: ComponentFixture<EditMovieComponent>;
  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditMovieComponent,
        ToolbarComponent,
        ChipsAutocompleteComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        MatProgressSpinnerModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        TranslateService,
        FormBuilder,
        {
          provide: Router,
          // useClass: class {
          //   navigate = jest.fn();
          //   navigateByUrl = jest.fn();
          // },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ id: 1 }])
          },
        },
        { provide: ApiRestService, useClass: ApiRestServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieComponent);
    translate = TestBed.inject(TranslateService);
    http = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EditMovieComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call createForm', () => {
    const spyCreateForm = spyOn(component, 'createForm');
    component.ngOnInit();
    expect(spyCreateForm).toHaveBeenCalledTimes(1);
  });

  it('should call onSubmit', () => {
    let post = {
      id: 1,
      title: "string",
      poster: "string",
      genre: ['Horror'],
      year: 2000,
      duration: 122,
      imdbRating: 3,
      actors: [1],
      studio: "string"
    }
    component.onSubmit(post);
    expect(component.isLoadingResults).toBeFalsy();

    // post = {
    //   id: 1,
    //   title: null,
    //   poster: null,
    //   genre: [],
    //   year: null,
    //   duration: 122,
    //   imdbRating: 3,
    //   actors: [],
    //   studio: null
    // }
    // component.onSubmit(post);
    // expect(component.chipActors.touched).toBeTruthy();
    // expect(component.chipGenres.touched).toBeTruthy();
  });

});
