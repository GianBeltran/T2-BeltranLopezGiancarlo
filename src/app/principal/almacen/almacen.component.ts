import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.css'
})
export class AlmacenComponent {
  precioUnitario: number = 0;
  cantidad: number = 0;
  montoAPagar: number = 0;

  calcularMontoAPagar(): void {
    if (this.cantidad > 20) {
      // Aplicar descuento del 10%
      this.montoAPagar = this.precioUnitario * this.cantidad * 0.9;
    } else if (this.cantidad > 10) {
      // Aplicar descuento del 5%
      this.montoAPagar = this.precioUnitario * this.cantidad * 0.95;
    } else {
      // Sin descuento
      this.montoAPagar = this.precioUnitario * this.cantidad;
    }
  }
}
