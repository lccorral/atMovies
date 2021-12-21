import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { from, of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DetailMovieComponent } from './detail-movie.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


describe('DetailMovieComponent', () => {
  let component: DetailMovieComponent;
  let fixture: ComponentFixture<DetailMovieComponent>;

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
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ id: 1 }]),
            // data: from([
            //   {
            //     modo: null,
            //   },
            // ]),
          },
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('test queryParam in route', (done) => {
  //   const activatedRoute: ActivatedRoute = fixture.debugElement.injector.get(ActivatedRoute);

  //   activatedRoute.queryParams = of([]);
  //   component.ngOnInit();
  //   activatedRoute.queryParams.subscribe((value) => {
  //     expect(value).toEqual([]);
  //     done();
  //   });
  // });

  // it('should back button', () => {
  //   const location = TestBed.inject(Location);
  //   const spyRouter = jest.spyOn(location, 'back');
  //   component.back();
  //   expect(spyRouter).toHaveBeenCalledTimes(1);
  // });

  // it('should get comunications in all states', () => {
  //   const SERVICE_CALLED = 'getComunicacion$';
  //   const service = TestBed.inject(NotificaApiRestService);
  //   const mock = {
  //     links: null,
  //     id: 990084,
  //     version: '1.0',
  //     tipoEnvio: 'Electronica',
  //     fecAlta: '2021-09-16T12:28:58',
  //     concepto: 'Notificación de prueba dos',
  //     descripcion: null,
  //     estado: EstadoEnum.pendiente,
  //     unidadOrganica: null,
  //     procedimientoAdministrativo: null,
  //     direccionPostalEnvio: null,
  //     documentosInformativos: null,
  //     expediente:null,
  //     fecCaducidad: '2021-09-30T10:36:18',
  //     interesados:null,
  //     identificadorComunicacion: 'N990084',
  //     historicoEstados: null
  //   };
  //   mock.estado = EstadoEnum.aceptada;
  //   let spy = jest.spyOn(service, SERVICE_CALLED).mockReturnValue(of(mock));
  //   component.ngOnInit();
  //   expect(spy).toHaveBeenCalled();

  //   mock.estado = EstadoEnum.expirada;
  //   spy = jest.spyOn(service, SERVICE_CALLED).mockReturnValue(of(mock));
  //   component.ngOnInit();
  //   expect(spy).toHaveBeenCalled();

  //   mock.estado = EstadoEnum.anulada;
  //   spy = jest.spyOn(service, SERVICE_CALLED).mockReturnValue(of(mock));
  //   component.ngOnInit();
  //   expect(spy).toHaveBeenCalled();

  //   mock.estado = EstadoEnum.caducada;
  //   spy = jest.spyOn(service, SERVICE_CALLED).mockReturnValue(of(mock));
  //   component.ngOnInit();
  //   expect(spy).toHaveBeenCalled();

  //   mock.estado = EstadoEnum.retirada;
  //   spy = jest.spyOn(service, SERVICE_CALLED).mockReturnValue(of(mock));
  //   component.ngOnInit();
  //   expect(spy).toHaveBeenCalled();

  //   mock.estado = EstadoEnum.rechazada;
  //   spy = jest.spyOn(service, SERVICE_CALLED).mockReturnValue(of(mock));
  //   component.ngOnInit();
  //   expect(spy).toHaveBeenCalled();
  // });
});
