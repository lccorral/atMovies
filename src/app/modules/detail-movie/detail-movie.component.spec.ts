import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { AppConfigEnvironmentCoreServiceMock, NotificaApiRestServiceMock } from '../../test-mocks';
import { DatePipe, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

// import { NotificaApiRestService } from '../../services/notifica-api-rest.service';
import { from, of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DetailMovieComponent } from './detail-movie.component';

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
        BrowserAnimationsModule
      ],
      declarations: [ DetailMovieComponent ],
      providers: [
        DatePipe,
        Location,
        {
          provide: Router,
          // useClass: class {
          //   navigate = jest.fn();
          //   navigateByUrl = jest.fn();
          // },
        },
        // {
        //   provide: ActivatedRoute,
        //   useValue: {
        //     queryParams: from([{index: 1 }]),
        //     params: from([{ id: 1 }]),
        //     data: from([
        //       {
        //         modo: null,
        //       },
        //     ]),
        //   },
        // },
        // {provide: NotificaApiRestService, useClass: NotificaApiRestServiceMock},
        // { provide: EnvironmentCoreService, useClass: AppConfigEnvironmentCoreServiceMock }
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
