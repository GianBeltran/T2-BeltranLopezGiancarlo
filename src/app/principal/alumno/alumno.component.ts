import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  promedio: number = 0;

  calcularPromedio(): void {
    // Se ordenan las notas de menor a mayor
    const notas = [this.nota1, this.nota2, this.nota3, this.nota4].sort((a, b) => a - b);

    // Se eliminia la nota más baja (la que está primero en el arreglo)
    const notasFinales = notas.slice(1);

    // Calcular el promedio con las notas finales según la fórmula dada
    this.promedio = (notasFinales[0] * 0.2) + (notasFinales[1] * 0.3) + (notasFinales[2] * 0.5);
  }

}
