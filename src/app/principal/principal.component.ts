import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  constructor(private router:Router, private route:ActivatedRoute, private authService: AuthService){
    
  }

  irHome(): void{
    this.router.navigate(["home"], {relativeTo: this.route})
  }
  irEstacionamiento(): void{
    this.router.navigate(["estacionamiento"], {relativeTo: this.route})
  }
  irAlumno(): void{
    this.router.navigate(["alumno"], {relativeTo: this.route})
  }
  irAlmacen(): void{
    this.router.navigate(["almacen"], {relativeTo: this.route})
  }

  salir(): void{
    this.authService.logout();
    this.router.navigateByUrl("login");
  }

}
