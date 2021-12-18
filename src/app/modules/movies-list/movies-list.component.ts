import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
// import { Comunicacion } from '../../models/comunicacion';
// import { NotificaApiRestService } from '../../services/notifica-api-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  // public jccmSpinner = '/assets/eCLM_spinner.gif';
  public loading = false;

  constructor(
    @Inject(Location) private location: Location
    // private readonly router: Router,
    // private readonly rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.rutaActiva.queryParams.subscribe((queryParam) => {
    //   if (queryParam.index) {
    //     this.selectedTabIndex = queryParam.index;
    //   }
    // });
    // this.rutaActiva.params.subscribe((param) => {
    //   this.idComunica = param.id;
    //   this.notificaService.getComunicacion$(this.idComunica)
    //     .subscribe(data => {
    //       this.notificaData = data;
    //       this.loading = false;
    //       this.dataLoaded = true;

    //       switch(data.estado){
    //       case 'Pendiente':
    //         this.colorEstado = 'icon-circle-pendiente';
    //         break;
    //       case 'Aceptada':
    //         this.colorEstado = 'icon-circle-aceptada';
    //         break;
    //       case 'Expirada':
    //         this.colorEstado = 'icon-circle-expirada';
    //         break;
    //       case 'Anulada':
    //         this.colorEstado = 'icon-circle-anulada';
    //         break;
    //       case 'Caducada':
    //         this.colorEstado = 'icon-circle-caducada';
    //         break;
    //       case 'Retirada':
    //         this.colorEstado = 'icon-circle-retirada';
    //         break;
    //       case 'Rechazada':
    //         this.colorEstado = 'icon-circle-rechazada';
    //         break;
    //       }
    //     },
    //     () => {
    //       this.router.navigateByUrl('/layout/notifica/comunicaciones/error/not-found');
    //       this.dataLoaded = false;
    //       this.loading = false;
    //     });
    // });
  }

  back(): void{
    this.location.back(); // <-- go back to previous location on cancel
  }

}
