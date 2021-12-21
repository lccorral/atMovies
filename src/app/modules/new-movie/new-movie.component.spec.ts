import { TestBed, async } from '@angular/core/testing';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { NewMovieComponent } from './new-movie.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { ChipsAutocompleteComponent } from '../../components/chips-autocomplete/chips-autocomplete.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


describe('NewMovieComponent', () => {
  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewMovieComponent,
        ToolbarComponent,
        ChipsAutocompleteComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
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
        {
          provide: Router,
          // useClass: class {
          //   navigate = jest.fn();
          //   navigateByUrl = jest.fn();
          // },
        }
      ]
    }).compileComponents();
    translate = TestBed.inject(TranslateService);
    http = TestBed.inject(HttpTestingController);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NewMovieComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
