import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Detalle } from 'src/app/_model/detalle.interface';
import { Producto } from 'src/app/_model/producto.interface';
import { Factura } from 'src/app/_model/factura.interface';
import { DetalleService } from 'src/app/_service/detalle.service';
import { ProductoService } from 'src/app/_service/producto.service';
import { FacturaService } from 'src/app/_service/factura.service';

@Component({
  selector: 'app-form-detalle',
  templateUrl: './form-detalle.component.html',
  styleUrls: ['./form-detalle.component.css']
})
export class FormDetalleComponent implements OnInit {

  form: FormGroup;
  detalle: Detalle;

  productos: Producto[];
  facturas: Factura[];

  constructor(
    private _detalleService: DetalleService,
    private _productoService: ProductoService,
    private _facturaService: FacturaService,
    private _formBuilder: FormBuilder,
    public _activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this._formBuilder.group({
      id: [null],
      idFactura : [null , [Validators.required]],
      idProducto : [null, [Validators.required]],
      cantidad : [null, [Validators.required]],
      precioUnitario : [null, [Validators.required]],
    })

    this._productoService.getItems().subscribe(data => {
      this.productos = data;
   });

   this._facturaService.getItems().subscribe(data => {
    this.facturas = data;
  });

  }

  operate() {
    let rawValuesForm = this.form.getRawValue();
    
    let detalle: Detalle = {
      ...rawValuesForm
    }
    
    this._detalleService.saveItem(detalle).subscribe(data => {
       this.closeModal() 
    });
  }

  closeModal() {
    this._activeModal.close();
  }
}
