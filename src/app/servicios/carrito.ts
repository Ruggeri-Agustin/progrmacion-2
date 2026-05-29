import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

export interface itemCarrito extends Producto {
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarritoCompras {
  carrito: itemCarrito[] = [];

  // 1. Agregar producto (si ya existe, solo aumenta cantidad)
  agregar(producto: Producto): void {
    const encontrado = this.carrito.find(i => i.id === producto.id);
    if (encontrado) {
      encontrado.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  // 2. Obtener el arreglo del carrito
  obtener(): itemCarrito[] {
    return this.carrito;
  }

  // 3. Eliminar un producto del carrito
  eliminar(id: number): void {
    this.carrito = this.carrito.filter(i => i.id !== id);
  }

  // 4. Aumentar cantidad de un producto existente
  aumentarCantidad(id: number): void {
    const producto = this.carrito.find(i => i.id === id);
    producto!.cantidad++;
  }

  disminuirCantidad(id: number): void {
  const producto = this.carrito.find(i => i.id === id);
  producto!.cantidad--;
}
vaciar(): void {
    this.carrito = [];
  }
}