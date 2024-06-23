import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router, private authService:AuthService){
  }

  submit(usuario:HTMLInputElement, password:HTMLInputElement): void{
    if(this.authService.loginGuardar(usuario.value, password.value)){
      this.router.navigateByUrl("/principal");
    }else {
      alert("Credenciales incorrectas");
    }
    
  }

}
