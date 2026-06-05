import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ListaDeseados {  // ← Cambiado de "Favoritos" a "ListaDeseados"
  private lista: Producto[] = [];
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.cargar();
    }
  }

  private guardar(): void {
    if (this.isBrowser) {
      localStorage.setItem('listaDeseados', JSON.stringify(this.lista));
    }
  }

  private cargar(): void {
    if (this.isBrowser) {
      const datos = localStorage.getItem('listaDeseados');
      if (datos) {
        this.lista = JSON.parse(datos);
      }
    }
  }

  agregar(producto: Producto): void {
    const existe = this.lista.find(f => f.id === producto.id);
    if (!existe) {
      this.lista.push(producto);
      this.guardar();
    }
  }

  obtener(): Producto[] {
    return this.lista;
  }

  eliminar(id: number): void {
    this.lista = this.lista.filter(f => f.id !== id);
    this.guardar();
  }

  esFavorito(id: number): boolean {
    return this.lista.some(f => f.id === id);
  }
}