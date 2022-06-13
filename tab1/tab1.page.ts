import { Component } from '@angular/core';
import { IFilme } from '../models/IFilmes';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Vingadores Ultimato',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 10,
      cartaz: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg",
      generos: ['Aventura', 'Ficção Científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    
    {
      nome: 'Bastardos Inglórios (2009)',
      lancamento: '09/10/2009',
      duracao: '2h33m',
      classificacao: 9,
      cartaz: "https://br.web.img2.acsta.net/medias/nmedia/18/90/43/36/20096333.jpg",
      generos: ['Ação', 'Aventura', 'Guerra', 'Humor Ácido', 'Drama'],
      pagina: '/bastardos-inglorios',
      favorito: false
    },
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 3,
      cartaz: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg",
      generos: ['Ação', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
  ];
}