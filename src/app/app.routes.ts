import { Routes } from '@angular/router';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Registro } from './auth/registro/registro';
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';
//import { Footer } from './compartidos/footer/footer';
//import { Nav } from './compartidos/nav/nav';
import { Contacto } from './paginas/contacto/contacto';
import { Inicio } from './paginas/inicio/inicio';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Productos } from './paginas/productos/productos';
import { PuppetCombo } from './paginas/productos/puppet-combo/puppet-combo';
import { ChillasArt } from './paginas/productos/chillas-art/chillas-art';
import { TortureStar } from './paginas/productos/torture-star/torture-star';
import { SixOneSixGames } from './paginas/productos/six-one-six-games/six-one-six-games';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full' },
    {path: "inicioSesion", component: InicioSesion},
    {path: "registro", component: Registro},
    {path: "carrito", component: Carrito},
    {path: "favoritos", component: Favoritos},
    //{path: "footer", component: Footer},
    //{path: "nav", component: Nav},
    {path: "contacto", component: Contacto},
    {path: "inicio", component: Inicio},
    {path: "ofertas", component: Ofertas},
    {path: "productos", component: Productos},
    {path: "puppetCombo", component: PuppetCombo},
    {path: "chilla", component: ChillasArt},
    {path: "tortureStar",component:TortureStar},
    {path: "616-games",component:SixOneSixGames},
    {path: '**', redirectTo: 'inicio' }
];
