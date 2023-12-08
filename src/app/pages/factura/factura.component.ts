import { startWith, map, debounceTime } from 'rxjs/operators';
import { FormFacturaComponent } from './form-factura/form-factura.component';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgbModal, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Factura } from 'src/app/_model/factura.interface';
import { FacturaService } from 'src/app/_service/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  facturas: Factura[];

  constructor(
    private _facturaService: FacturaService,
    private _formBuilder: FormBuilder,
    private _modalService: NgbModal,
    private spinner : NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.getFacturas()
  }

  openModal(factura?: Factura) {
    let modal = this._modalService.open(FormFacturaComponent)
    modal.componentInstance.factura = factura

    modal.result.then((result) => {
        this.getFacturas()
    })
  }

  eliminar(id: string) {
    this._facturaService.deleteItem(id).subscribe(data => {
      this.getFacturas()
    })
  }

  getFacturas() {
    this.spinner.show();
    this._facturaService.getItems().subscribe(data => {
      this.facturas = data
      this.spinner.hide();
    });
  }

}
