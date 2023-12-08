import { DetalleComponent } from './detalle/detalle.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './factura/factura.component';

const routes: Routes = [
  {
    path: "dashBoard",
    component: DashBoardComponent,
  },
  {
    path: "",
    component: FacturaComponent,
  },
  {
    path: "detalle",
    component: DetalleComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
