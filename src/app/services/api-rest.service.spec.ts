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
    SUB_URL_MOVIES: '/movies',
    SUB_URL_ACTORS: '/actors',
    SUB_URL_COMPANIES: '/companies'
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
      expect(resp).toEqual({ movies: [], actors: [], companies: [] });
    });

    const request = httpMock.expectOne(
      urlBase + environment.SUB_URL_MOVIES
    );
    request.flush(response);

    httpMock.verify();
  });

  it('should getMovie', () => {
    const id = 1;
    service.getMovie$(id).subscribe((resp) => {
      expect(resp).toEqual({ movies: [], actors: [], companies: [] });
    });

    const request = httpMock.expectOne(
      urlBase + environment.SUB_URL_MOVIES + '/' + id
    );
    request.flush(response);

    httpMock.verify();
  });

  it('should getActors', () => {
    service.getActors$().subscribe((resp) => {
      expect(resp).toEqual({ movies: [], actors: [], companies: [] });
    });

    const request = httpMock.expectOne(
      urlBase + environment.SUB_URL_ACTORS
    );
    request.flush(response);

    httpMock.verify();
  });

  it('should getActor', () => {
    const id = 1;
    service.getActor$(id).subscribe((resp) => {
      expect(resp).toEqual({ movies: [], actors: [], companies: [] });
    });

    const request = httpMock.expectOne(
      urlBase + environment.SUB_URL_ACTORS + '/' + id
    );
    request.flush(response);

    httpMock.verify();
  });

  it('should getCompanies', () => {
    service.getCompanies$().subscribe((resp) => {
      expect(resp).toEqual({ movies: [], actors: [], companies: [] });
    });

    const request = httpMock.expectOne(
      urlBase + environment.SUB_URL_COMPANIES
    );
    request.flush(response);

    httpMock.verify();
  });

  it('should getCompany', () => {
    const id = 1;
    service.getCompany$(id).subscribe((resp) => {
      expect(resp).toEqual({ movies: [], actors: [], companies: [] });
    });

    const request = httpMock.expectOne(
      urlBase + environment.SUB_URL_COMPANIES + '/' + id
    );
    request.flush(response);

    httpMock.verify();
  });


});
