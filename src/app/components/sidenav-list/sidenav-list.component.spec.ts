import { TestBed, async } from '@angular/core/testing';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from  '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidenavListComponent } from './sidenav-list.component';
import { HttpLoaderFactory } from 'src/app/app.module';


const TRANSLATIONS_ES = require('../../../assets/i18n/es.json');

describe('SidenavListComponent', () => {
  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidenavListComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatListModule,
        MatIconModule,
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
    const fixture = TestBed.createComponent(SidenavListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should load translations', async(() => {
    spyOn(translate, 'getBrowserLang').and.returnValue('es');
    const fixture = TestBed.createComponent(SidenavListComponent);
    const compiled = fixture.debugElement.nativeElement;

    // the DOM should be empty for now since the translations haven't been rendered yet
    expect(compiled.querySelector('.js-movies').textContent).toEqual('');

    console.log(http);
    http.expectOne('/assets/i18n/es.json').flush(TRANSLATIONS_ES);
    // http.expectNone('/assets/i18n/fr.json');

    // Finally, assert that there are no outstanding requests.
    http.verify();

    fixture.detectChanges();
    // the content should be translated now
    expect(compiled.querySelector('.js-movies').textContent).toEqual(TRANSLATIONS_ES.HOME.PELICULAS);

    // translate.use('fr');
    // http.expectOne('/assets/i18n/fr.json').flush(TRANSLATIONS_FR);
    // http.verify();

    // // the content has not changed yet
    // expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_ES.HOME.PELICULAS);

    // fixture.detectChanges();
    // // the content should be translated to french now
    // expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_FR.HOME.PELICULAS);
  }));

});