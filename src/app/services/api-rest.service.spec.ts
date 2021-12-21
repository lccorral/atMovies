import { TestBed, async } from '@angular/core/testing';
import { ApiRestService } from './api-rest.service';
import { HttpClientModule } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';


describe('ApiRestService', () => {
  let service: ApiRestService;
  let httpMock: HttpTestingController;

  const urlBase = ' http://localhost:3000';
  const environment = {
    SUB_URL_MOVIES: '/movies'
  };
  const response: any = {
    movies: [],
    actors: [],
    companies: []
  };

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [],
    })));

  beforeEach(() => {
    service = TestBed.inject(ApiRestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getMovies', () => {
    service.getMovies$().subscribe((resp) => {
      expect(resp).toEqual({ movies: [] });
    });

    const request = httpMock.expectOne(
      urlBase + environment.SUB_URL_MOVIES
    );
    request.flush(response);

    httpMock.verify();
  });


});
