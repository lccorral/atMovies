
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Actor, Company, Movie } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ApiRestService {

  private URL = ' http://localhost:3000';
  private SUB_URL_MOVIES = '/movies';
  private SUB_URL_ACTORS = '/actors';
  private SUB_URL_COMPANIES = '/companies';


  constructor(@Inject(HttpClient) private http: HttpClient) {}

  // GET
  // MOVIES
  public getMovies$(): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      this.URL + this.SUB_URL_MOVIES
    );
  }

  public getMovie$(id: number): Observable<Movie> {
    return this.http.get<Movie>(
      this.URL + this.SUB_URL_MOVIES + '/' + id
    );
  }

  // ACTORS
  public getActors$(): Observable<Actor[]> {
    return this.http.get<Actor[]>(
      this.URL + this.SUB_URL_ACTORS
    );
  }

  public getActor$(id: number): Observable<Actor> {
    return this.http.get<Actor>(
      this.URL + this.SUB_URL_ACTORS + '/' + id
    );
  }

  // COMPANIES
  public getCompanies$(): Observable<Company[]> {
    return this.http.get<Company[]>(
      this.URL + this.SUB_URL_COMPANIES
    );
  }

  public getCompany$(id: number): Observable<Company> {
    return this.http.get<Company>(
      this.URL + this.SUB_URL_COMPANIES + '/' + id
    );
  }

  // POST
  public postMovie$(datos: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.URL + this.SUB_URL_MOVIES, datos);
  }

  // PUT
  public putMovie$(datos: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.URL + this.SUB_URL_MOVIES, datos);
  }

  // DELETE
  public deleteMovie$(id: number): Observable<Movie> {
    return this.http.delete<Movie>( this.URL + this.SUB_URL_MOVIES + '/' + id);
  }

}
