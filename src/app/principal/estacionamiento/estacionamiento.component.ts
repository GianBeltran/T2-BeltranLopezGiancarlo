import { Component, NgModule } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estacionamiento',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './estacionamiento.component.html',
  styleUrl: './estacionamiento.component.css'
})
export class EstacionamientoComponent {

  horas: number = 0;
  minutos: number = 0;
  costo: number = 0;
  tarifaPorHora: number = 1.500; // Tarifa por hora en soles

  calcularCosto(): void {
    const tiempoTotalEnHoras = this.horas + (this.minutos / 60);
    this.costo = Math.ceil(tiempoTotalEnHoras) * this.tarifaPorHora;
  }

}
