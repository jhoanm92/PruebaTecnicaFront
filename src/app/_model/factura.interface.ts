// import { Tienda } from './tienda.interface';

export interface Factura {
    id: string;
    numeroFactura: number
    fecha : Date;
    tipoPago : "Electronico" | "Efectivo"
    documentoCliente: string
    nombreCliente : string
    subtotal : number
    descuento : number
    iva : number
    totalDescuento : number
    totalImpuesto : number
    total : number
}
