
import {Observable} from 'rxjs';
import { Actor, Company, Movie } from './src/app/models/models';


export class ApiRestServiceMock {

  // GET
  // MOVIES
  public getMovies$(): Observable<Movie[]> {
    return new Observable<Movie[]>((observer) => {
      observer.next([
        {
          "id": 1,
          "title": "Dancing Lady",
          "poster": "http://dummyimage.com/400x600.png/cc0000/ffffff",
          "genre": ["Comedy", "Musical", "Romance"],
          "year": 2006,
          "duration": 161,
          "imdbRating": 8.27,
          "actors": [4, 5, 6]
        },
        {
          "id": 2,
          "title": "Mooring, The",
          "poster": "http://dummyimage.com/400x600.png/dddddd/000000",
          "genre": ["Horror", "Thriller"],
          "year": 1987,
          "duration": 187,
          "imdbRating": 1.99,
          "actors": [5, 6]
        }
      ]);
      observer.complete();
    });
  }

  public getMovies(): Observable<Movie> {
    return new Observable<Movie>((observer) => {
      observer.next(
        {
          "id": 1,
          "title": "Dancing Lady",
          "poster": "http://dummyimage.com/400x600.png/cc0000/ffffff",
          "genre": ["Comedy", "Musical", "Romance"],
          "year": 2006,
          "duration": 161,
          "imdbRating": 8.27,
          "actors": [4, 5, 6]
        });
      observer.complete();
    });
  }

  // ACTORS
  public getActors$(): Observable<Actor[]> {
    return new Observable<Actor[]>((observer) => {
      observer.next([
        {
          "id": 1,
          "first_name": "Isaak",
          "last_name": "McQuode",
          "gender": "Male",
          "bornCity": "Ciduren",
          "birthdate": "24/12/1957",
          "img": "http://dummyimage.com/600x400.png/dddddd/000000",
          "rating": 2.03,
          "movies": [
            3,
            7
          ]
        },
        {
          "id": 2,
          "first_name": "Rory",
          "last_name": "Chanders",
          "gender": "Male",
          "bornCity": "Cijengkol",
          "birthdate": "19/04/1975",
          "img": "http://dummyimage.com/600x400.png/5fa2dd/000000",
          "rating": 2.43,
          "movies": []
        }
      ]);
      observer.complete();
    });
  }

  public getActor(): Observable<Actor> {
    return new Observable<Actor>((observer) => {
      observer.next(
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
        });
      observer.complete();
    });
  }

  // COMPANIES
  public getCompanies$(): Observable<Company[]> {
    return new Observable<Company[]>((observer) => {
      observer.next([
        {
          "id": 1,
          "name": "Jacobson-Dickinson",
          "country": "Colombia",
          "createYear": 2010,
          "employees": 81,
          "rating": 4.32,
          "movies": [1, 10]
        },
        {
          "id": 2,
          "name": "Quitzon-Erdman",
          "country": "China",
          "createYear": 2005,
          "employees": 611,
          "rating": 8.19,
          "movies": [2, 3, 4]
        }
      ]);
      observer.complete();
    });
  }

  public getCompany(): Observable<Company> {
    return new Observable<Company>((observer) => {
      observer.next(
        {
          "id": 1,
          "name": "Jacobson-Dickinson",
          "country": "Colombia",
          "createYear": 2010,
          "employees": 81,
          "rating": 4.32,
          "movies": [1, 10]
        });
      observer.complete();
    });
  }

  // POST
  public postMovie$(): Observable<any> {
    return new Observable<any>((observer) => {
      observer.next(
        []
      );
      observer.complete();
    });
  }

  // PUT
  public putMovie$(): Observable<any> {
    return new Observable<any>((observer) => {
      observer.next(
        []
      );
      observer.complete();
    });
  }

  // DELETE
  public deleteMovie$(): Observable<any> {
    return new Observable<any>((observer) => {
      observer.next(
        []
      );
      observer.complete();
    });
  }
}
