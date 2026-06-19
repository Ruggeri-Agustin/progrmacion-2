import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoCompras } from '../../servicios/carrito';
import { ListaDeseados } from '../../servicios/favoritos';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
  ofertas: Producto[] = [
      {
         id: 1,
        img: 'https://static.vecteezy.com/system/resources/previews/020/336/039/non_2x/steam-logo-steam-icon-free-free-vector.jpg',
        nombre: 'Puppet Combo Bundle (Steam)',
        desarrolladora: 'Puppet Combo',
        link: '/puppetCombo',
        precio: 34.97,
        desc: 'pack con los 3 juegos de Puppet Combo publicados en steam. Contiene: Murder House, Christmas Massacre y Stay out of the House.',
        cr1: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/bundles/28510/cwgxlak0rdczbn0u/page_bg_raw.jpg?t=1665695511',
        cr2: 'https://www.metacritic.com/a/img/resize/03d27b82e7ca8375e7fe53e155440e700c6ebe92/catalog/provider/6/12/6-1-822042-52.jpg?auto=webp&fit=contain&height=480',
        cr3: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1840490/capsule_616x353.jpg?t=1671911494',
        cr4: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/896520/capsule_616x353.jpg?t=1689365167',
        disponibilidad: true,
      },
        {
        id: 2,
        img: 'https://static.vecteezy.com/system/resources/previews/020/336/039/non_2x/steam-logo-steam-icon-free-free-vector.jpg',
        nombre: 'Torture Star Bundle (Steam)',
        desarrolladora: 'Torture Star Video',
        link: '/tortureStar',
        precio: 15.65,
        desc: 'pack con los juegos en Steam de la editorial torture star video creada por Puppet combo para juegos externos a ellos. Contiene juegos como: Sniper killer, Skin Freak, The Horror of Salazar House, etc',
        cr1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KQlkWkbpDupMF2sAL8XYNuUF4clrqdHfYQ&s',
        cr2: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExMVFRUWFxgXGBYYFxYWGBUXFxcXFhUWGBcYHSggGBoxHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJkBSQMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUDBgcBAv/EAEAQAAIBAwIEBAMFBQYFBQAAAAECAwAEEQUhBhIxQRNRYXEigZEUMkJSoQdiscHRFSMzcpLwU1SCouEWFySU8f/EABsBAQADAQEBAQAAAAAAAAAAAAACAwQBBQYH/8QAOxEAAgIBAgMGAwYEBQUBAAAAAAECAxEEIRIxQQUTIlFhcYGRoQYUMkKxwSPR4fAVFlJTciRDYpLxNP/aAAwDAQACEQMRAD8A4bQCgFAKAUAoD0CgM62xrvCSwfPIo6t9N67g5sfJVfP9K5hAzNp8nJ4gUlM45huB7+VScHjJwi1ACgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQFhY2/4j0G9WQjncmkR7q5LHbp5VyUs8iLeSPUDgoC+4R1s20wyOaJ/hdD0INX0z34XyIyXkWvGPDkcT80X+G4Dp7HsfY5HyrTZQms9ScfFHJp8kRXrWBpoYPiuHBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAfca5NDqLm6Tkgz+Y8v9a1OPDXnzJvkUdZSsUAoDYdS0zFrbXKjAbKNj8wOx/WrMcmQT3aN51SAy6dbPjJCkfIMa9WL4s/AtpXha9TQbm367VhtqwSIDWdZ3EjgwvbkVHAwYSK4RPKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAkWg3rqJI2fVLXNkWH4SD8ulehbD+BktkvAahXnFAoD7hiLEKoyScADuaA7BrPDLRaAocfGjc5HlmrmsRwUp+LJQ8Ha5JOYLbIEcSSFh+YHO59sj6itVU+NrBZFNS2MN/aDJ2rTNYNUkUtzBg1nnXnkVkCVaxyQIUkNV4I4I7DFcInlAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgJlstdRNG9aREJbeSI/iQge+Nv1r11Hipa9C6KzFo50RXjmY8oD7ilZSGUkEbgjqKA6LwhxNLPa3dtO5ceEWUnqMVbF5W5VJYexk4D0lY1llyOZxygZ3VdifmT/AVv01KjLiNNGHLLJuoWR32rbOCktjVKOTXru2PcYrLhrmUOJVTQ4qmdeSBDljrJKIIU0NVtEWiOy4qJE+aAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAZIUya42dRMlsiADjrUcnXEguuDUyJ80AoBQCgFAKAUB9IMmgJ9qN6lDmTRvvDjAYP1r3qlmJpq5GjcTWnhXMq4wOYkezbj+NeJdDhm0ZZrEsEbSbLxpkiyBzEjJ9if5VWlkgyNLGVYqeoJB+RxXDpP0W7MbMF6yL4fyYjmP0H61Ovngi0T01hklcIcDmIz6A/+K0x1DhJpcjvCmkb1ovEKzjEiY8myN/cV6FVnHuixaiUNmslu+mxyD4WB9KtbfVE46uEtpbGratoZXNV90uaLHXlZRrlxb4rLOviKSHJHWSccArrhaoZFkauERQCgFAKAUAoD3FAe8podw8ZPmhwUAoBQCgFAKAUB6ozQF/oWnGR1UefyqmyfCslsI5ZtPFWimKNcjBA+tZdNf3jeC6yGEc8ul3rejKzDXTgoBQCgFAKA9UZoCSsWK7glgm2ydKsrjlkjbNMmWKPmY43x6n5V6sLFB7k42KPMg8cWvixx3KA9OV8jBx+En+FY9WlJ8cTljUvEjTEYg5BII7jtWEpJNxctMy5C52UYGM+/mfWjltlkq65TkoR5t4Rs39iRZRgCjKBzYOQzfmGRtWB9otSzGJ9jV9ko8H8S159Ev3yfemcGm4mEcbMWYk9gAOrMx7KOpNchrLJywoo5qfs5pNNU7LLZJL2/vJkt7ZVeRElEsaNyrIuQJMdSMjp69612610YWMnndldjx16nNycYrCXJt+/0Nms28FI5CSQ4cgZ7xnBB+o+tehp+0U9NK2S5dM/Iy6rsR/4hHRwllPG+OS5v5FlG5uopJSoRYyq9c87NnYbdgCaloO03qJPMcJLzNmt7JjoOCqM3KUvTH7+ZrUWki4MpBCCON5WY7gKnoB1JIHzrLR2o77eBQ29y7tTsWrR6fvXNt7JLC5sp/7LUgEkg49Ky6rtLFjjGPLY06T7MwtpjZObTazjC6mCTQEP42/T+lZH2hJ/lRo/ypT/ALkvoRrrhV4pxFI2zRJMCOvLIMrkdj1+laLNRwVqeN2eFoux1frbNPxeGGd174Rl/wDTMf52/Ssv3+Xkj3f8qUf7kvoSTwYgtprp5vDjjwoZhnxJTjliQDct38gNzWnT3ztfJYPG7X7L0uhikpyc3yW3LzZV6XoQkjDsxGc4Ax0qF+rcJ8KRo7L+z0NVp1dZJrPLHkS//TKfnb9Kp+/z8kej/lSj/cl9CBxBoDWyxSE5SYOU8/7tgrZHuetb6LHZDiZ8r2poo6PUumMspJfUqFXNWmBLOyN00zguNIFutQuBbRP/AIa8peSX/JGDlh67D1qjjnP8Gy8/5I9R6fT6X/8ARmU/9CeMf8pb7+iXuXF2ulf2erD7V4H2lkT4IuYSeGCzkcwPJjHw81RjXLLxL9Cy3V0d3W5UrG+EpS2WfPz+BqGp6HHymW1mE8Y6jBWRP8yHf5jI9amrJReJ/MpnpKroO3St7buL5peafVfUoSKuPMPKAUAoBQCgFASraLO9RbLYx2N6/Z7pMskyAOEUkHpnI8vSsOstjCDysmqNE4rifI3zjjRJZkyXTC+S4O3zry9FqIVyxjmSlHiWDiep23IxUncHFfQReVkwyWGVhFWEDygFAKAUAoDJEKHUWUAyKsgssmXGkWoZxkbbnHngZxW2MOCDfU4+RJubqRiSv4T90dAq9dqxRtf4myHUmabqqFil2T/fYjCkHAQ7L06djvWumdXC1J7surccNGpcTaM1pO0Tfd6ofzIehzWOyHBLBXKOHgm8FaHJczfAFPhjmPMyoPIbuQP/AMrJqW+DhjzZ7HYcILUK6x+GPkm9+nJP3OmWGi3MSMBBau7FcPJLbyBVGcgKXxkkjf0rBXXKHOKfu0fVazVVXtcN04Jf6Yy3+OCDxS93BZzFmtLfn5I8QiESTK7fFGrRsSBgZPmBWzT83mKXsfO9rqPBFRusnl8pZSXzS3/qQ9K4SuREmFjGQDvNCp39C+R5VlvjO2bkuXuj6DszUabRaZUybzvnwy5v4fAt5+HrhoIo+WPmR5j/AI0GORxCRvz/AJlamJqnu9ueeaOrU6X769S8/hSXhlzy8/l8sFnJYlbRbWFo3k3eUiSMKHbAI52YA4UAbE7k16Ma5afRtfmn+h4sdZDV9rd/LPd17LZvfpsk+u+5CGivFaNDlDNcOuVWRCFijPMAz55RlsHGei1zQ0uiqV0l6L3L+09VXrtTCtZ4I7vZ/HbGeX6mHTdAuImLGG3kJUhQ80DKrHGHK8/xY329a8yFUoyzJJ/FHsarXU3V8ELJw35qEs48uR8zaDM8ivcfZYIxjnZJIEVUGSzciPknGenXapOmVk9kkvQq/wAUo0mmfjnJ74coyy30WWkiB/Zk99NNeRqnJM/93zSxoRFGAkQ5XYH7oHarNVGU5YjyXqjF2HbTpanO1vinu8Rk9um6WPUu1sLhRGohsI1CqrPI1vISfxSMxfPyFchCW0VCL+JLVX1Zla9TalzSUWkvJbo5vxXq0t7crbJJG8UTlIRFH4MTEn4pAmep8z1A7V6G1ceR8k+PV37ybb6vd49fZeRu+kcLzwtGWihkVMfA08ADYGMH4+leV3c3PiaT+KPvPvmmjpu4qlKOFhNQlt9DJf6JdycvNFbKchR4JhBJYgDKxsS3086WVyljwpew0eroojLitnLrmae2PdJFN+0HhPULi4VILSZoLeNIo25cB8DmlkwcYy7N27CvSrcYRUd9vRnxWqhdqbpXScfE8/ijy6Ln0RWcL8B3aXcBu7aWOEyKGJXrk7DbfPX6VG6aceHfd+TL+ztNKu12y4fDFteKL3S26/H4EjibhjVr68aWW1lSMtyJlfghiBxGgHYAY7dcmpuxJbL6MzV6Odln8SS33b4ot+b68ydf8Pw/ZxpqPN46XDOFaMKf8JcyspPN4OOhAzsdqjmUPE+vp/f1L+Cq9xpiscKf5k+vXknnPJfzNeseB9WikV1s5hynsOozv33rtkoyi1v8mQ0ULaLo2Jx9fFHddVz8iLxzoLwS+KIWSCblaNuUheZkVpEHsxYewqVU+KKZm12n7i+UFyy8brln6Gr1YZBQCgFAKAk2Vo0jAD61xvBOEHJ4LVIAp5fKqZSPVpqS2Z1L9ndhISXTlAUDqPbYYPWvJ1844wzXq0owii84jtrxlbBQDf4d9x23rHp50xkuLJ5zzjY4zq9i/MzMRua+jhJY2Mc4vJrsseKtTKjHXTgoBQCgPRQE2BM11ImixtbUnpWuql8ySRtPD1iS4Hl3rco7E4xLLVraJT4qqoRcjP4ppPyj93zrzr+7T2KppN4iaRxDC6/G5+IkH5+lYY2cbyidlbgtzcdF1sX1hc/aUQmBMBsYBypwc+e1ehGfHB8XQKXFF5NS4Lk8NzIpHONijoroynHVWG+/0rx9VY448KaPoOwNFXqIycbZRmukXjbp+5uE+tM6lTDagEYysCKw9Qw6GsMrlJYUUj6qjs2dVim77JY6N7P3MerxclhFGR8d5OG3/wCBbgkkeWXbGfQ1po/h0yn5njdqf9b2lVpVyju/1f0X1M2nTLb21zctjdVto843ec8rY9ow5+dVaaviUpejNvbesVU6Kk+c4t+ya/v4GHQrHx7iKI9GYcx8lHxOf9INUVw45qJ6uu1H3fTzt8l9en1M+uX32mYtGP8AEclQP3mwg98Ba9PtSxOUKo/lX1Z4X2Z0/daaeos/M8/Bf2z54ivybh7ZGzFbJHb7Yw0kYLSnP+diPlVOpslCpUp7dSHYMXqdRbrJdXhfH+mDNqGtwaekELwxPLJH48jPGshUSMREnxdPhXJH71atHTSoJ2xzk8ztbta56uca7JKMdtnjlz+pAv8AiUXETwxmBFk5Q4jiSNmAOQpI3xnG1enXTpY5lDY8my67VOMJTct9svO72MWmOkLoTGJFQj4G6NjoD6dNq+WlYnY5465P0mOlcdMqK5cOI4TXQtIp7m9DWkfhQrMMSNFEkX92p5m53G4Tz8+netNN8nLEIo8HtHsqqFLs1N82l5tc/T1NCsrKJbx0il8WOMtyScvL4mNsgZO2+3njNatXJqr3PD+z1ULNen0SbX6L9cm63Rjhs4uZV8W5mYIx6iKFfiK+WXYD/prDGn+A5/3g+ou7Qx2pDT8W3C8/8ny+n6mDVNYltdPLQCNWkleB5OQGQJJFkBX6rsHG1adCotN43PF+1M7Y2xipPha5dMpnMa3nyRbcK6n9muopj0Vhn271VbFuO3Nbm7s+2FduJ/hknF+ifX4Mx6jEbe4YxkjlfmjYbfDnKEfLFShKNkcoruou0lvDLZrk/P1Xmjdk1yKPTo7tLSETfaWVfvFEcRhjIFO5/wAnNy57dqhGC4n8DRdqbFVXjG6lySWze+PLPXHM1ThzRpr+6VVBdnfmdj6nLMx/Un3rts8LC5vkQ7P0ysn3k9oR3k/bp7vlgn8ezC5vXMPxQxLHBGw6FYUCFge4LBiPepRxCKiZ77JX2ytfOTb+ZQjSpPy040V8DMyaBOeiE/I1F3QXU73cvIzQ8LXTHHhmoPU1rqdVMvIsYOBLlu2Kqlrql1JrTyLqw/Zs+Rzkn03rPPtOCWxYtN5l6eF0hZIFIiaTJLleblVeuB71TXq3Z4vI010pZa6Gs8S6CtnyMLkTczkEcvLy7/D3Odt/YjpW2uzvHjHQnHir3k+uN/U6dwVbFLfmDYLDONjkbYrxdbPiswXaueZJeRm1+xlK5EzAHsMZ+tQonCMsOJk5nONb0J+UkPt1IPfz3r26dRF7FE63g0O/gx3rcmZWiDUiIoBQCgMsKZNDqLC2jq2uOWTL+1k5Iw4/CylvbO5rfqE3p3gsjssm2tIWQ8mAWHX+IrBppyUXGL+BKTeNjXNW1V/tKLKojjRRyDORjuQe5rPa3JYKqvDPLNZ13U2uJM78ibD286hTUq44JX3O2WT50/XpYYZYFwY5RuCOh8xWlTaWClSwsETTL94JFlTlLKc4dQ6n0ZW2IqqUVJYaJ1XWVS4q5NPzTwbIP2h3P/Bsv/qxf0qHc1/6V8jV/iesf/dl/wCzKrUOJrue4W5klLSrgKeVeVVHRQmOUL+7jHnVjSawzLC2cJccW0/PqS9b4pnuo0jk8JERi4WKJIhzkcvMeXqcDA8qRhGKwkWW6i22SlZJtrk28kk8f3YRkRbdOZDGXSCNJOVhythwMgkd6jGuEXmKWSdut1NseGyyTXk22i2s+JJLW28WNIS+UdC8SSFCSAcFhkdM1ttorlDvGt9tyuOt1EY91CbUfLOxq2k8TT27yOBFIZSWcSxpKCxOSwDDY7ncVilCMvxLJ2nVX0rFU3H2eCHrmrS3czTzEF2xnACgBQFUBRsAAAKmUNtvLISkggjqKHDaLbj27VQGS2kI/HJbxO5/zNjLe53qt01vdxRsh2jq4LhjbJL3Z5f8d3csMkIEESSgLJ4MKRM65zyllGeXzHeuxrjH8KwV3au+5JWzcsebbKDTr1oZFlXlLIcgMoZT6FTsR6VKUVJYZXVbOqSnW2muq5k3iDiGe8dHl5B4aBEWNRGiKGLbKuwOWO9FFJYXITtnOfHJty8+pn1biqe4gFu6whAyvlIkjZmRWVSzKBzbO3XzrkYRj+FYJ3aq6/HezcsebyUNSKD0GgNh0rXIuQQ3cPjxjZWVuSWMeSnow8genYiqpVJviWzN1OunCHdTSnDyl09nzXwZtkJ0prMRs9wYVnLrAEj+0c5jALk+Njw8bA+earUJpvxfQ1T1WlcIfwd0ntxPC3z6P6kz+0v7prexgFtE4w7lueaVT+FmxhF6ZVevn5wcoV79fPqUW6i29KLworlFLCX836saLwy5ZcqpXpvmsd+siovHMjGvzN6tuE2AyIoh/qP868x6iT6v6FmYos7DQ3CjIjOBjPKfP1qiUnJ5WQ5JE2DRjzb8vTsMVzhk9jjsWCSdGUA4wPlXXVLm2R70zmwGMg1x07ZyFZvjBpusyiO5ikbBYMyc2Ax5WUnHJjcc2Dt0q3RTeXH4npRjFw9zl3Gusn47eSNXJcssmACpOF8hnABA8jXvaWvPjRj11iiuBb+puv7NZfEiBL45Vx167d683tCOJ8iiEso3m60hW35m+tefxtE0zn/E+loeYFyAv7xGdu9enpLmsbHJxyjl2sWiqdv4k/zr24tmOaS5FJIuKmis+K6cFAeigJduuK6iSLS1hJ6VtorJG0QWvJA45ed5FKInnkdfatV8lCvBZJqMdyt0LVngbwLjYjoT3HlXiSTW65kYTzsy41y3juVePbKIHVvLJx9KqU3niZbKKawc7vLKSJirqRuR6HHrV6aZlaaI4UntXTh80AoDJEhJ2odRYJZIB8bEk9FHWpqK5slgs7HT4tswk+74z9BV8Iwf5cnHB+ZL4vQpBH8IUOfhUdFRQcD6mrtTtBepSscWEabXnlgoDZeF7QcrOwBzsMjy6/79K87W2PKimfafZjRRdc75pPOyz6c/79DZeJdFiC2aeGqt4bTysBhmErf3MefIKvN/11zve6qS/MyT0Ee0O0JSaxVXtt1a5r58zNqMdvY2njTxJJPOhFtAw2CHY3EgH4fyjuanpKpPxy+Bl7f7Qqi3paEv/JpL5L9/kVnDekc4hhCgvIQNwDu5/ln9KzWzlZa1F+h7mh0tOk0EZWxWVHieUvfH7H3fQ273ly8EarEr+FHgbMIwFZ/XJGc+tXayfDiCPM+zmmV3eaqxJ5eFt8Xj9CPx/BDDBaRCNRM6NPIwG4Rzywp7YUt8606WLVab6nidvXRs1kowSUY7befX6mkLWk8U3rhzSeYRRBQXkKjcZ3c7fxrx7rJTtai/Q/R+ztLVpdBGVsVlLieV8Sp4y8Jr6YW6KkUbeEuPxeH8DSHfcsQWz6ivWSUUkfnttjtslN9W2ZdIsvE+8/KN84G/TtVFtnBHOC/S6d32xrXV4Nm061nlJWFHcgZIQE4HTO3uK8pKc3tufpNtWioiu8UYrlukXem6BqMkioVniUnd25lVB3Y59O3ei0zb8SwvNmLUazs2qtzXBJrkljLfkdD1U/ZLR2V2Kxx4Uscs7nYFie5J+VY7eGyf8NYX6+p8rpovV6tKSXie6S2S9PgcwsLrUZs+C9zJy4zyM5xnOM46dDWmNPF+FH2t1Wgpx3sYLPLKRik1O+WTwzNOJM8vLzuG5j2xnrXODDxjcmtNo5Q41CPDzzhYwdxRGVFVmywVQx82AGT9ao1EVGbij83clKbcVhZePY1HjDXJbflVCC0hwueg/MzegpoNFLWWuLliKWX/ACO6nU16anjccvOEc84iku9rlZ45DGcqyrymJhgkgZ3JAwc9RX0un7PoqhKEU9+eeuDxZdq222RlLbHJLl8Sg1a2nvmEkrgszEA45cHrgAdPOtlejrrjiPv6kLu05zlmXRbLojBwzqrWlz4bP8BOD/MV5+u0qa25noaTUcaTO+6f4EihlfmBGfvH+Zr5aSaeGbyBrWnwMGDKpHvjIx3867Cc4vMSXPmcm470+2jUeGiKc78te7obLJp8bM90YpbHO58Z2r0kZWYq6cFAer1oC1t481dXDiLC/sWSIpzgkt0UDc/+K9FSjTHcmmo7s6PbWS2lu13cD++cYiTsi9gKwWWOcssonLieTmmuWokt3vJMhmkCRds43Y+vSoOHg4mSUcRyQeHdXCSP4pPK8fJnc/761mlHkWQlvuW97ItyFjRSwBBLkY+maSazlFjxLZETU9PNsA6ADoCuMg58xRN53ISWN0U3EFuqupVeXmGSo6A98Vb0TK5rcqyh8q4QM9pJg0JIuYLeNmBDFGPZtwT6GtEYQlyeGMtF9Yq4PI64PY9jWqpOL4WjrllZKr9oF5zSxxDpEgB/zHr/AAqnWyzPh8jPWub8zVKxlp6BQ6lk33TLQpGqAEkDsM79W/nXhWzdk3I/VtDp46TTQr8lv7vn9S9sLtGeW5uuaYQReLyf8UpyoiE9k3XPoKt08VbZ4jz+2L5aDRf9OsZePbOcv3NBudQm1C8Msx5mdsnyVF3CKOygbAV6d0+Cts+J7L033rVwrfLOX7Ldm9Wd+tpbTXgVmljxFFjARHmVgJGOcnADEAd8Vg0ValLifQ+q+0+rsqpjTHGJ8/PboQ+EdLQtHDIXC8pLBACzEAuyrkgA7Hc1Vtddv1N3i7N7NTik3Fb583z+ppfFmtm9upbjl5A5ARM55ERQka/JVFewljY/OJScm5PmyFplv4kqr5nf2G5qF0+CDZr7N0z1OqhX5vf2W7+h03T75LSCe85WeWEBIlAHIjyhlWRznO2CQB3ArztFWpScn0PsPtNq500Rpitp837dDm9rExOc5JPuSa9Ns+ESNp0/TjGOdicnYD+J/wB+defq7k1wo+p+zWk4tQ7pflX1f9Ml/pzXaKfAEoV8ZKK2G5TtuB51iUZ8OEnhn1ephpLWlfwtrza2ydJ0jTpooF8eV2mYgsC2RED0THQtjc/Ss2r4K1wfm6+np/M+J119Ntz7iKUFywvxevt5fMof2j3ZVIoA5bmy7DyC7KPrk/KqtNH8x7P2d0+Zzua5bL9zU7HWLm2UrFI8YbDEDbO2x3G4xWyW64XyPfu0en1L4rIqTWx0HQOBGS5W5uJ1lIPicoU/E5+IFifU5q3irplu8tdMfufK63t1T07opg49M55Lltj5G43keVI5jXlWrK5ng1Sw+RxvjXViGuFEgBhAUAqzHLBW5g42Q9Bv5V9F2Lp1Xp1Z1l+2Ujze1bXbfGvG0frk1bTpG8LDNkEb9d/PNfRQW254ty8exHOqFMYOACSPcZU1BzSLFTxFNdxEx+P+/ufUk4/QVmsWY8Ruplwz4Dff2ecQwRjlnyV88EgfSvF1Wiuueak2elHUQgsSeDpVzBaTLzgRvGRlW2II36H3rw5OyqbjumaYtSSfM5lxpZQJ2UKcbZH6d69rRWTmvFzK7UkczvFUMeXpXpxMbI9SOCgPuJcmh1FzGxjTmxkk4UetbK33cOL5E+SydL/ZlwqX/wDnXe6p90HuewA8qqlOUnuVuWd2QP2gcRC4uBGX5YwcE+Qzvge1ReM4IxWXuUmrXP24xRxRGOCHZAep7ZI7VC65PZGnHF7GeLRo1I5iPaqYqUizgRbKqxLkAAfqauVOFlkkkjX9ZvRI+Oy7+/l+tZ0iE30LHRtLimhbxcEsdie3YV7GmpjKrxIw3WSU9jVp7EJI8fUA7VhshwS4TRB5Rhn0sxPgj5frXJwcHhnI4fIn6fMrnwmHbarKmpeFkmzZ7G5UW3iPu0BOT5hf9ivShLNXFLmjJNNSwupzS+uTLI8jdWYn6mvInJyk2y1LCwYKidJ2ixBpkBO2c+5G4H1qnUNqt4PS7Irrnra1Y8LOfiuS+Z0m1uvstpdXZOG5Rbxdj4k+eYj1EaufnWDR18Tk/THzPrPtHrFVGutdZKT9o/1/Qx6PGXMkQ28e3mQZ/fhYof8AUFNV6bMbkma+21C7s6covPJrHv8A/TT+FLfPPJ5YX2zv/L9DWnXSeFE8X7KUxc7LW1nZLz9f2Nt4hPJBZ2Y+9OzXkg78igpAvr92RvnXK069O5LmyWrnHWdsQrb8MP1W/wCuxjs7x4mLIcEqyZx2dSrY8jgnesEJuDyuZ9ZqdNXqK+7sWUYdF4Vgnc8yrHFGpeWU55Y4x1Pv2A7mtVNl1ksJnhdo6Ps3RUuyVaz0W+7+fzKjS7eB7i4ktVcQqQEDkM4Q7czcoGMkfLOPe/W8Sgkjy/sz3UtROyTSljCj+uPoXMspaFoDgxuyuwx94qCFyeuBzHb1rBC2cPws+r1XZ+n1UlK6Occt3jck6bw3bpA1zMGVMlIlQgPLL+6WBARepbHp1rbRKyXik9j5btqvQ6VdzTWuN9d/Cvnz8vmRGhKgA83TIJ7+3ptj5Vk1EuKZ7f2fpjXo008ttt/yLSPiS7VUVZnVUUIqqSowM9h1O/WoOyfLLNFvY+jsnKycMtvLeTfNHtJEjQ3UjmWQ83JnAjXGRzdy56+m1VajTqMM/m5/D+Z8br7dN33Bp44its77v09EafqsTXWoeEARzSLEM9QoOCd/m1NNXso+Z9bo3HSdn94+kXJ+/wDexO/abaqtxGUGFMQVcdAIyVA+mKnKzjlJ9M7e3QzfZ252US4ufE2/judH0CbxLaF855oo8+4UA/qDVOpiuPPml+h8nrId3qbIeUn+pR8WcVw23NGA7ygZ5VGwJGRzMdh2ONz6VLTdlXapcUcKPm/2MU9bVTLE+fkcklje8Exe4ii5FM7tL8Bdjt4K4yXXYe22xr6WajpYQrjFtcv6nlw4r7JWzxllVYzzSqPiAXyxnA9ya9OmErFlGS2Fdb9SLq1l4SY5+bfYFd8nsMVzUUd1Bb5LNPb3ks4x8T40/TXwFkzhj8MedyfM+Qqquh/m+RO26Ocx6dS8nuFjUrEoYgbkD4R6D+lbZTjBYj/QxwhKcuKfXp1Nw4TtDZpy3TqDJiTlJyE58/B77ZPqTXyeqs7+blE9+mPBFIoOL7uJg4HJjIwRjLDI7dq7p63HqWzmmjnF6VLHl6V6CMzI9dOCgJlhCWOB1NThHieCUUdI4M4S+1zRg/4cQy57Zzv/AArTe0sRXQTfQ279oHEaQRC3h2VRyjH0zVP4V6lT3ZxyBhLKS2+D/smqJMurSLifXFiHJFgeZ71WodWXuaWyPm3vgvxyHfsKsi8PI4urIOpcRls43rspOXMhK3yKu3uiTuepyf5CkYpvcq4jY4tS5AFzhV+JvfsK9BW42IYImmqZHLt3PMfas1a7yzLLH4YjXdUEmWHngfTFd1FnePY5CPCjzRIOYI2cPk49QDuK7TXnDXM63tuZNe1Dw4HiB+KVyT6KMVddZw1uPmyprMsmo1gJCgPpWxQFrq3Et3dIsc87yIhyqsRgHGM7Drjai2Ott8zNp/F99BGIormRIxnCgjAz1xkVzCO8T5ZIOk6xPavzwSNG+MZU9Qe1dOJtcj6v9cuJphPLK7yjlw5PxDl+7gjpigz1Lb/3A1P/AJyX/t/pXMI7xy82RNU4uvrmMxTXMkkZIJQkYJG4zgb13BxtvmVljfSQuskTsjqchlOCKHE8F8v7QNT/AOcl/wC3+lcwiXHLzZ5da/PcMr3E7ylRhSxHwgnJAA2G9QaySTNj0nidYYsR3cqMcEoOme/6VnatUtlsXcaNks+PYgPjuJifT+tUtajoHJeYfjGyLBuaYsWyWbmPuetVOq55zg5sW8HHlqBhZJP9L/yFQUb4rC5Es5MY49gA+Ev3H3G89u1IVWQ/CdyyTBxqvh+MfEI5uRVAwWPUnfYIO7dO1Rtrcn49y2mpzZpl3rX2x7mRTkhxsvkFVfh8x6nrX0Ggjw0xTWOZ4HakYrVZjyND1WYht8EH0/l2PpV9smmTpinEjQakU6D5+nl61CF7jyLJUqXMkLq/xhyMkDv54wKn958XEyP3dcPCidA5Yhy4IY/Gw6qPygdhV8W3iWefMokkvCly5H092ZnEcREaKRyjzbPw5Pnmset1Xh4UtjXodHmXFJ7+b/QzXPFsinleMcyjlIPn1yfPtWCNKaymaptxeGit1XiIzDHhqv8AlGKsjVw9SDkUZNWkTygPQKA2fhjRZZ5kiQEZxzEeR7VdHMeXM63g7ncCLTrTwUxzEZc9/auxXVlbZw/ivVTI7HO5NVSeXk6ka3HcsowNs9agTzg+ElIOe/nXRkSTM3Uk0DbZ8gihwyRvy7jtXU8HTN9qLDl7dT61Lib2CJs+pcsfInU9TXePEcI6z7htshF8hk+5rmCeC8sI0hgWdzjkZyB5k5AFbaoxjWrH0yUze/Cade3JkdnPUmsM5cUsnTBUQKAUAoBQCgFAKAUB6FzQGZLcmoOR3BcaXovOd9hVFl/CX11ZNy0zhyEDcZNeZbqp52NsKIovrbhyL8grFLVz8yzgiuhYRcPw/lH0qiWqs8zuI+R93ekKgBjtzIT5AYHvXab3N4nPCL6Ka7JeOSiii1HRbp/iNuygDooH1xnNepTfp4LCmn7nqQq0UVwqabNVu9P2IDMAeoyQPmK9KMkzPqez0lsQNEkNtcDP3W2NbtPPLx5nyXaukahnyM/F9hFnmVgM74rTZFSjlnl6SyS2aNOxWJnqItrWa38FlKsZD3xkbb1RKM3LPQ1QlUq2mtyJaEqSOmdsnYD3rRGbjujN3am0nsbWuoafHGEVXlk7sgaPO2MHBOe+/rXmOGonPibwvXc3d5VFYh9CFHoFxPvHasM/ickn9asepqr2lNFPdynukeXPA9wilnwu2cUhr65PETj00luzWriEoxU1tjLKyUNYMVdOEvT4stk9BU4R3yzqN44Y42Wx+7bq7HqxbB+QxXXNZIvck8QcZi6UndWPVT2+dHLKOYOe383M1VkiLQCgFAKA9BoD0GgPuNcnqKHTaLS7giXmkbmOPujck+XpWqt1x3kSk2lsUWq6o0x6cqD7qDoP6mqrLXP2Kyvqo6KAUAoBQCgFAKAUAoDJHUWdJsD1W0TTL3TL4Cs1kMmiuZtmmXea866s2QkbPY3Ix1rzrIMsLONqzs5gn2txiqpRyRJySA1HDQKV+DLRiThxnyc1vXad6WNvkbX2je1hv6Ir9W4F01Inkl8RVRSxfxG+HHceZ9Kup7T1cpqMMZz5GG+XeRamcJupTzZZi/Ybduxx2r6qVkrN2eRCuNawiG+M7jFEGS9IUs/KrKpPTmIC+xPaoWtKOWSrznYv5OHb6XIW35yfxK6OOuSRhulZPvdEd3LHumi9wm+hacIcNX1vOrtZ8+/48DHn1NZtZqtPbW0p49iVNc4vdHZZZhHGMgA46DtXzSXE9jaaLxLeZVt+u1expK8NFdj2OSa8B4le/TyPOs5lZVxWWFp9w4671LOwJVloUkqh+gY4GfTcn2oonMkWZeVTv0OAfPeonSATQHlAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAeg0BmjkqDR1MkxT4qLRJMubHVives86sl8LcGzadrg71hs03kaoXI2Wx1pTjevPs0rLuJMt4bxW6GqHU0cJcV3jvVbgCVHqNQdYI2vIt3bS27NyeIuA3keoPtkVZp26bY2JZwQnHii0cO1rhy7tc+JFlRtzoeZD8+o+YFfU06qq78L38nzMEoTjzRV2emT3DcscTMfQH9TV07a61mTIKEpPZG/8M/sqZsPdyBB+RTufc9q8jU9sJbVLPqaa9N1kdQ0jS7S0XEKKu2M9z7nqa8O66255m8mqMVFYR7e6yi9DXIUSkSNY1HVubJJr0KtPgi5Gl61qoIIzXq01YM85mh6jLzPmvSrWEYpPLIlTImW3nKHI+lAThqm3RvbO2/Wu5OYIU85b28q4dMNAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUB6KA+g9cwdMiy1HAySYb5l6GouCZNTaLC31sjrVTpTJq1lpbcQkdCaplp0Wq4tLbiMn8VUy0y8iatLGHiE+dUy0qJqwmJrufxVU9MvIlxmddY7cwx64xUXp15EuIzw6sF2UqPYAVXLT55neJB9bx+L9aLSryOcaIVxxEB3q2OkIuwp7viLyrVDTIrlaUV5rROd61RpSKZWlDeXme9aIwKZSyVpNXFZ5QCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKA9zQHoeuYB9rNiucJ3JlS6I71FwO8RIj1Fh3qLrJKbJCaq3nUXWjveMzLq7edR7ol3jMn9st51zukd71mN9XY966qkc7xkZ79j3qagiLmyPJdetSUSOSO81TUSOTCTUjh5QCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQHtAeUAoD6WuMGUVE6fVDp5RA+WoDE1SREV0HlAKAUB//Z',
        cr3: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1405440/header.jpg?t=1669908453',
        cr4: 'https://img.itch.zone/aW1nLzk4NDU3OTMuanBn/original/queZY1.jpg',
        disponibilidad: true,
      },
      {
        id: 3,
        img: 'https://static.vecteezy.com/system/resources/previews/020/336/039/non_2x/steam-logo-steam-icon-free-free-vector.jpg',
        nombre: 'Chilla\'s Art Pack (Steam)',
        desarrolladora: 'Chilla\'s Art',
        link: '/chilla',
        precio: 108.57,
        desc: 'pack con todos los juegos en Steam de la desarrolladora Chilla\'s Art hasta el momento, Contiene juego como: Night Delivery, The Bathhouse, The Closing Shift, etc.',
        cr1: 'https://foothilldragonpress.org/wp-content/uploads/2022/10/chillas-art.jpg',
        cr2: 'https://media.karousell.com/media/photos/products/2025/7/14/chillas_art_complete_pack__pc__1752467187_c8fb3b08_progressive',
        cr3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYjd40JxmCpGkT8_ZERfFvt69X6We81icag&s',
        cr4: 'https://pbs.twimg.com/media/GCpTyW8awAA1OmT.jpg',
        disponibilidad: true,
      },
      {
        id: 4,
        img: 'https://static.vecteezy.com/system/resources/previews/020/336/039/non_2x/steam-logo-steam-icon-free-free-vector.jpg',
        nombre: '616 GAMES COMBO (Steam)',
        desarrolladora: '616 Games',
        link: '/616-games',
        precio: 11.99,
        desc: 'pack con los recientemente añadidos juegos de la bizarra desarrolladora 616 games. Contiene juegos como: Trash Horror Collection, Evil is Back, Red Valley, etc.',
        cr1: 'https://i.ytimg.com/vi/mMckDo0m5P8/maxresdefault.jpg',
        cr2: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/bundles/24341/j9odfok2nrjmra6d/header_ratio.jpg?t=1665009302',
        cr3: 'https://img.itch.zone/aW1nLzgyNDI2MDcucG5n/original/h0Wb2S.png',
        cr4: 'https://img.itch.zone/aW1nLzg3MDAwMTIucG5n/original/jDwPL0.png',
        disponibilidad: true,
      },
      {
        id: 5,
        img: 'https://c7.patreon.com/https%3A%2F%2Fwww.patreon.com%2F%2Fgutenberg%2Fshop-launch-teaser-image-square%2F590491/selector/%23shop-launch-teaser-square%2C.png',
        nombre: 'Ultimate Puppet Combo Pack (Patreon)',
        desarrolladora: 'Puppet Combo',
        link: '/puppetCombo',
        precio: "10.00 al mes",
        desc: 'servicio de suscripción exclusivo que otorga a los miembros acceso ilimitado a descargas sin DRM de juegos de terror de supervivencia de estilo retro inspirados en los años 80 y la PS1, prototipos y títulos de acceso anticipado creados por el desarrollador Jordan King (Torture Star Video).',
        cr1: 'https://c7.patreon.com/https%3A%2F%2Fwww.patreon.com%2F%2Flaunch-teaser-image%2F590491/selector/%23launch-teaser%2C.png',
        cr2: 'https://www.patreon.com/meta-image/post/22012189',
        cr3: 'https://www.patreon.com/meta-image/post/21582893',
        cr4: 'https://www.patreon.com/meta-image/post/31605464',
        disponibilidad: true,
      },
      {
        id: 6,
        img: 'https://c7.patreon.com/https%3A%2F%2Fwww.patreon.com%2F%2Fgutenberg%2Fshop-launch-teaser-image-square%2F1888730/selector/%23shop-launch-teaser-square%2C.png',
        nombre: 'Chilla\'s Art Nivel 1 (Patreon)',
        desarrolladora: 'Chilla\'s Art',
        link: '/chilla',
        precio: "1.00 al mes",
        desc: 'suscripción mensual de apoyo a los desarrolladores japoneses de juegos de terror. Permite acceder a información exclusiva y lanzamientos anticipados de sus próximos videojuegos antes de que salgan en la plataforma de Steam.',
        cr1: 'https://c7.patreon.com/https%3A%2F%2Fwww.patreon.com%2F%2Flaunch-teaser-image%2F1888730/selector/%23launch-teaser%2C.png',
        cr2: 'https://www.patreon.com/ig/card-teaser-image/creator/1888730.png?v=its7ww',
        cr3: 'https://steamcdn-a.akamaihd.net/steam/apps/1130620/header.jpg?t=1598227472',
        cr4: 'https://www.patreon.com/meta-image/post/101000536',
        disponibilidad: true,
      },
      {
        id: 7,
        img: 'https://c7.patreon.com/https%3A%2F%2Fwww.patreon.com%2F%2Fgutenberg%2Fshop-launch-teaser-image-square%2F4348578/selector/%23shop-launch-teaser-square%2C.png',
        nombre: '616 GAMES VIP (patreon)',
        desarrolladora: '616 Games',
        link: '/616-games',
        precio: "8.00 al mes",
        desc: 'membresía mensual de $8 dólares creada por el desarrollador Rafael Braza. Está diseñada para fanáticos de sus videojuegos de terror retro inspirados en la estética VHS de los años 80 y la consola PSX',
        cr1: 'https://c7.patreon.com/https%3A%2F%2Fwww.patreon.com%2F%2Fcard-teaser-image%2Fshop%2F4348578/selector/%23card-teaser%2C.png',
        cr2: 'https://www.patreon.com/meta-image/post/91989746',
        cr3: 'https://www.patreon.com/meta-image/post/106254706',
        cr4: 'https://www.patreon.com/meta-image/post/120646695',
        disponibilidad: true,
      },
  ]
   constructor(private carritoService: CarritoCompras, private listaDeseadosService: ListaDeseados) { }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregar(producto);
    alert(`${producto.nombre} agregado al carrito`);
  }

  agregarAListaDeseados(producto: Producto): void {
  this.listaDeseadosService.agregar(producto);
  alert(`${producto.nombre} agregado a la lista de deseados`);
}
}
