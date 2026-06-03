import { Component, OnInit } from '@angular/core';
import { CarritoCompras, itemCarrito } from '../../servicios/carrito';
import { Productos } from '../../paginas/productos/productos';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {
  items: itemCarrito[] = [];

  constructor(private carritoService: CarritoCompras) {}

  ngOnInit(): void {
    this.items = this.carritoService.obtener();
  }

  subtotal(item: itemCarrito): number {
    const precio = typeof item.precio === 'string' 
      ? parseFloat(item.precio) 
      : item.precio;
    const total = precio * item.cantidad;
    return parseFloat(total.toFixed(2));
  }

  aumentar(id: number): void {
    this.carritoService.aumentarCantidad(id);
    this.items = this.carritoService.obtener();
  }

  disminuir(id: number): void {
    const item = this.items.find(i => i.id === id);
    if (item && item.cantidad === 1) {
      this.carritoService.eliminar(id);
    } else {
      this.carritoService.disminuirCantidad(id);
    }
    this.items = this.carritoService.obtener();
  }

  eliminar(id: number): void {
    this.carritoService.eliminar(id);
    this.items = this.carritoService.obtener();
  }

  vaciarCarrito(): void {
    this.carritoService.vaciar();
    this.items = this.carritoService.obtener();
  }

  comprar(): void {
    if (this.items.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    alert('Compra realizada con éxito');
    this.carritoService.vaciar();
    this.items = this.carritoService.obtener();
  }
}