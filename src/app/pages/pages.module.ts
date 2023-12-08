import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PagesRoutingModule } from './pages-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FacturaComponent } from './factura/factura.component';
import { FormFacturaComponent } from './factura/form-factura/form-factura.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DetalleComponent } from './detalle/detalle.component';
import { FormDetalleComponent } from './detalle/form-detalle/form-detalle.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgbTooltip, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashBoardComponent,
    DetalleComponent,
    FormDetalleComponent,
    FacturaComponent,
    FormFacturaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    NgSelectModule,
    NgbTooltipModule,
    NgxMaskModule.forChild()
  ]
})
export class PagesModule { }
