import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
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
      desc: 'Un equipo de noticias local irrumpe en una casa abandonada para investigar una escabrosa historia de fantasmas... ¡hasta que un MANÍACO los persigue!',
      cr1: 'https://www.metacritic.com/a/img/resize/03d27b82e7ca8375e7fe53e155440e700c6ebe92/catalog/provider/6/12/6-1-822042-52.jpg?auto=webp&fit=contain&height=480',
      cr2: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1064460/ss_3f2f7ba81b9819709ffc5095d1157716e4319186.1920x1080.jpg?t=1669836425',
      cr3: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1064460/ss_39911e9a7655071cd79d93385db341bdc42aa2ad.1920x1080.jpg?t=1669836425',
      cr4: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1064460/ss_1a7a15f38e2698ac425db9f7103ab626afa8ffc6.1920x1080.jpg?t=1669836425',
    },
    {
      id: 2,
      img: 'https://store-images.s-microsoft.com/image/apps.23865.13794259264775165.981f5991-3592-472c-af32-598bd0cf8390.57f0b1a1-61a8-4d04-9eb2-db1292bed1d0',
      nombre: 'nun Massacre',
      precio: 4.95,
      desc: 'Una carta ha llegado a tu casa en circunstancias misteriosas... tu hija se ha enfermado en el internado. Cuando vas a buscarla, se desata una tormenta y el camino queda bloqueado. Sigues caminando por el bosque y pronto se desata el caos...',
      cr1: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000048936/6c2cfc7a18785e0cc8402ce37133d9399534e8b75532cf5e45540cf12660f2bd',
      cr2: 'https://img.itch.zone/aW1nLzE1MjYzNDQuZ2lm/original/Tq5EuC.gif',
      cr3: 'https://img.itch.zone/aW1hZ2UvMzEwNTE1LzE1MjYzNTkuZ2lm/original/WDXLyK.gif',
      cr4: 'https://img.itch.zone/aW1hZ2UvMzEwNTE1LzE1MjYzMzcuZ2lm/original/OtKY3U.gif',
    },
    {
      id: 3,
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202304/2618/42e39588e95f85e70c76a50a6830d2476e0f481136877cc2.png',
      nombre: 'Stay Out of the House',
      precio: 14.99,
      desc: 'HORROR EN SIGILO que te tendrá al borde de tu asiento mientras intentas escapar de la casa de un ASESINO EN SERIE CANIBAL.',
      cr1: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/896520/capsule_616x353.jpg?t=1689365167',
      cr2: 'https://img.itch.zone/aW1hZ2UvMzM3MzMyOC8yMDE0MDI3Mi5wbmc=/347x500/TXgHtP.png',
      cr3: 'https://img.itch.zone/aW1hZ2UvMzM3MzMyOC8yMDE0MDI3MS5wbmc=/347x500/ETt1g5.png',
      cr4: 'https://img.itch.zone/aW1hZ2UvMzM3MzMyOC8yMDE0MDI5NS5wbmc=/347x500/GYQZ3K.png',
    },
    {
      id: 4,
      img: '/assets/night.jpg',
      nombre: 'Night Shift',
      precio: 14.99,
      desc: ' Lo que comienza como una rutina de reponer estantes y barrer el piso rápidamente se convierte en un descenso vertiginoso hacia la paranoia, el pavor y la locura empapada de sangre a medida que el asesino se acerca',
      cr1: 'https://i.ytimg.com/vi/TAUnOcIw2Lc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCrUul3MEOharjjSOyLIOKBxGqcEA',
      cr2: '',
      cr3: '',
      cr4: '',
    },
  ];
  chillasArt: any = [
    {
      id: 1,
      img: '/assets/store.jpg',
      nombre: 'The Convenience Store',
      precio: 2.99,
      desc: 'Un juego de terror japonés sobre una estudiante universitaria que trabaja en el turno de noche.',
    },
    {
      id: 2,
      img: '/assets/shift.jpg',
      nombre: 'The Closing Shift',
      precio: 5.99,
      desc: 'a suspenseful 1st-person POV game where you play as an employee closing the shift at a run-down asylum. But it seems like you are not as alone as you initially thought...',
    },
    {
      id: 3,
      img: '/assets/bath.png',
      nombre: 'The Bathhouse',
      precio: 4.49,
      desc: 'Un juego de terror japonés que gira en torno al trabajo en una casa de baños',
    },
    {
      id: 4,
      img: '/assets/delivery.jpg',
      nombre: 'Night Delivery',
      precio: 2.99,
      desc: 'un juego de aventuras de terror psicológico japonés',
    },
  ];
  tortureStar: any = [{}, {}, {}, {}];
  Games: any = [{}, {}, {}, {}];
  emika: any = [{}, {}, {}, {}];
  yames: any = [{}, {}, {}, {}];
  varios: any = [{}, {}, {}, {}];
}
