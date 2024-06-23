import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USERNAME = "Beltran";
  private readonly PASSWORD = "12345";

  constructor() { }

  loginGuardar(usuario:string, password:string): boolean{
    if(usuario == this.USERNAME && password == this.PASSWORD){
      sessionStorage.setItem("usuario", usuario);
      return true;
    }
    return false;
  }

  logout(): void{
    sessionStorage.clear();
  }

  estaLogueado(): boolean{
    return !! sessionStorage.getItem("usuario");
  }


}
