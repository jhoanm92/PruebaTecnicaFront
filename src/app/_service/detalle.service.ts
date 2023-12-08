import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Detalle } from '../_model/detalle.interface';

@Injectable({
  providedIn: 'root'
})
export class DetalleService extends GenericService<Detalle>{

  constructor(
    protected override _http: HttpClient
  ) {
    super(
      _http,
      `${environment.HOST}/detalles`
    )
  }

}

