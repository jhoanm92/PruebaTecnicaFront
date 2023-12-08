import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PageResponse } from '../_model/page-response.interface';
import { Factura } from '../_model/factura.interface';

@Injectable({
  providedIn: 'root'
})
export class FacturaService extends GenericService<Factura>{

  constructor(
    protected override _http: HttpClient
  ) {
    super(
      _http,
      `${environment.HOST}facturas`
    )
  }

  // getByVehiculoId(id: string) {
  //   const url = `${environment.HOST}/pedido/byVehiculo/${id}`;
  //   return this._http.get<Pedido[]>(url);
  //  }


}

