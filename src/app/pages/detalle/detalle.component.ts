import { startWith, map } from 'rxjs/operators';
import { FormDetalleComponent } from './form-detalle/form-detalle.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { EmpleadoService } from './../../_service/empleado.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
// import { Empleado } from '../../_model/detalle.interface';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Detalle } from 'src/app/_model/detalle.interface';
import { DetalleService } from 'src/app/_service/detalle.service';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalle: Detalle[];

  constructor(
    private _detalleService: DetalleService,
    private _modalService: NgbModal,
    private spinner : NgxSpinnerService,
  ) {}

  ngOnInit(): void {
    this.getDetalle();
  }

  openModal(detalle?: Detalle) {
    let modal = this._modalService.open(FormDetalleComponent)
    modal.componentInstance.detalle = detalle

    modal.result.then((result) => {
        this.getDetalle()
    })
  }

  eliminar(id: string) {
    this._detalleService.deleteItem(id).subscribe(data => {
      this.getDetalle()
    })
  }

  getDetalle() {
    this.spinner.show();
    this._detalleService.getItems().subscribe(data => {
      this.detalle = data
      this.spinner.hide();
    });
  }

}
