import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Producto } from '../models/producto';

export interface itemCarrito extends Producto {
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarritoCompras {
  carrito: itemCarrito[] = [];
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.cargar();
    }
  }

  private guardar(): void {
    if (this.isBrowser) {
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }
  }

  private cargar(): void {
    if (this.isBrowser) {
      const datos = localStorage.getItem('carrito');
      if (datos) {
        this.carrito = JSON.parse(datos);
      }
    }
  }

  agregar(producto: Producto): void {
    const encontrado = this.carrito.find(i => i.id === producto.id);
    if (encontrado) {
      encontrado.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
    this.guardar();
  }

  obtener(): itemCarrito[] {
    return this.carrito;
  }

  eliminar(id: number): void {
    this.carrito = this.carrito.filter(i => i.id !== id);
    this.guardar();
  }

  aumentarCantidad(id: number): void {
    const producto = this.carrito.find(i => i.id === id);
    if (producto) {
      producto.cantidad++;
      this.guardar();
    }
  }

  disminuirCantidad(id: number): void {
    const producto = this.carrito.find(i => i.id === id);
    if (producto && producto.cantidad > 1) {
      producto.cantidad--;
      this.guardar();
    }
  }

  vaciar(): void {
    this.carrito = [];
    this.guardar();
  }
}