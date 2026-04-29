import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [RouterOutlet],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  puppetCombo: any = [
    {
      id: 1,
      img: 'https://store-images.s-microsoft.com/image/apps.57418.14163413953167753.5fb76bc9-9bdf-4576-9079-0e674a1d536c.d5b61dc7-c7b4-4e39-8231-f6154f78d590',
      nombre: 'Murder House',
      precio: 11.99,
    },
    {
      id: 2,
      img: 'https://store-images.s-microsoft.com/image/apps.23865.13794259264775165.981f5991-3592-472c-af32-598bd0cf8390.57f0b1a1-61a8-4d04-9eb2-db1292bed1d0',
      nombre: 'nun Massacre',
      precio: 4.95,
    },
    {
      id: 3,
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202304/2618/42e39588e95f85e70c76a50a6830d2476e0f481136877cc2.png',
      nombre: 'Stay Out of the House',
      precio: 14.99,
    },
    {
      id: 4,
      img: '../public/assets/night.jpg',
      nombre: 'Night Shift',
      precio: 14.99,
    },
  ];
  chillasArt: any = [{}, {}, {}, {}];
  tortureStar: any = [{}, {}, {}, {}];
  Games: any = [{}, {}, {}, {}];
  emika: any = [{}, {}, {}, {}];
  yames: any = [{}, {}, {}, {}];
  varios: any = [{}, {}, {}, {}];
}
