import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/_service/factura.service';
import { Factura } from 'src/app/_model/factura.interface';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.css']
})
export class FormFacturaComponent implements OnInit {

  form: FormGroup;
  tipodePago: any[]= ["Electronico" , "Efectivo"]
  // tiendas: Tienda[];
  factura: Factura;

  constructor(
    private _facturaService: FacturaService,
    private _formBuilder: FormBuilder,
    public _activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this._formBuilder.group({
      id: [null],
      numeroFactura : [null , [Validators.required]],
      fecha : [null, [Validators.required]],
      tipodePago : [null, [Validators.required]],
      documentoCliente : [null, [Validators.required]],
      nombreCliente : [null, [Validators.required]],
      subtotal : [0, [Validators.required]],
      descuento: [0, [Validators.required]],
      iva: [null, [Validators.required]],
    })
  }

  operate() {

    let totalDescuento = this.form.value.subtotal * (this.form.value.subtotal  / 100)
    let totalImpuesto = this.form.value.subtotal * (this.form.value.iva  / 100)
    let total = this.form.value.subtotal - totalDescuento + totalImpuesto 

    let rawValuesForm = this.form.getRawValue();

    let factura: Factura = {
      totalDescuento,
      totalImpuesto,
      total,
      ...rawValuesForm
    }
    
    this._facturaService.saveItem(factura).subscribe(data => {
       this.closeModal() 
    });
  }

  closeModal() {
    this._activeModal.close();
  }

}
