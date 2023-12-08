import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../_model/producto.interface';
// import { Cobro } from '../_model/cobro.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends GenericService<Producto>{

  constructor(
    protected override _http: HttpClient
  ) {
    super(
      _http,
      `${environment.HOST}productos`
    )
  }

}

