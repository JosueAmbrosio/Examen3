import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MarcaComponent } from './components/marca/marca.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CountsComponent } from './components/counts/counts.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component:NosotrosComponent },
    { path: 'cliente', component: ClienteComponent },
    {
        path: 'servicios', component: ServicioComponent, children: [
          { path: '', component: CountsComponent }, 
          { path: 'counts', component: CountsComponent }
        ]
      },    { path: 'productos', component: ProductosComponent},
    { path:'marca', component: MarcaComponent},
    { path: 'contacto', component: ContactoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
