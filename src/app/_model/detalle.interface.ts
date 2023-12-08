import { Factura } from "./factura.interface";
import { Producto } from "./producto.interface";

export interface Detalle {
  id : string,
  factura : Factura,
  producto : Producto,
  cantidad : number,
  precioUnitario : number
}
