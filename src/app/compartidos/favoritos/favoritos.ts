import { Component, OnInit } from '@angular/core';
import { ListaDeseados } from '../../servicios/favoritos';
import { CarritoCompras } from '../../servicios/carrito';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {
  favoritos: Producto[] = [];

  constructor(
    private listaDeseadosService: ListaDeseados,
    private carritoService: CarritoCompras
  ) {}

  ngOnInit(): void {
    this.favoritos = this.listaDeseadosService.obtener();
  }

  eliminar(id: number): void {
    this.listaDeseadosService.eliminar(id);
    this.favoritos = this.listaDeseadosService.obtener();
  }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregar(producto);
    alert(`${producto.nombre} agregado al carrito`);
  }
}