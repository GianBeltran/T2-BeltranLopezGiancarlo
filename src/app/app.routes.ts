import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { authGuard } from './auth.guard';
import { EstacionamientoComponent } from './principal/estacionamiento/estacionamiento.component';
import { AlumnoComponent } from './principal/alumno/alumno.component';
import { AlmacenComponent } from './principal/almacen/almacen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './principal/home/home.component';

export const routes: Routes = [

    {path: "login", component: LoginComponent},
    {path: "principal", component: PrincipalComponent,
        canActivate: [authGuard],
        children: [
            {path: "home", component: HomeComponent},
            {path: "estacionamiento", component: EstacionamientoComponent},
            {path: "alumno", component: AlumnoComponent},
            {path: "almacen", component: AlmacenComponent}
        ]
    },

    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}

];
