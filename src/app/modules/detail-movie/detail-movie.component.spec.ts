import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DetailMovieComponent } from './detail-movie.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ApiRestService } from '../../services/api-rest.service';
import { ApiRestServiceMock } from '../../../../test-mocks';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


describe('DetailMovieComponent', () => {
  let component: DetailMovieComponent;
  let fixture: ComponentFixture<DetailMovieComponent>;
  let service: ApiRestService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        MatCardModule,
        MatIconModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [ DetailMovieComponent ],
      providers: [
        DatePipe,
        Location,
        {
          provide: Router,
          useClass: class {
            navigate = jest.fn();
            navigateByUrl = jest.fn();
          },
        },
        { provide: ApiRestService, useClass: ApiRestServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ id: 1 }])
          },
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(ApiRestService);
    fixture = TestBed.createComponent(DetailMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    component.ngOnInit();
    expect(component.isLoadingResults).toBeFalsy();
  });

  // it('should call deleteMovie', () => {
  //   const spy = spyOn(service, 'deleteMovie$');
  //   component.id = 1;
  //   component.deleteMovie();
  //   expect(spy).toHaveBeenCalledTimes(1);
  // });
});
