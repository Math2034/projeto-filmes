import { Component } from '@angular/core';
import { ISeries } from '../models/ISeries';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  listaSeries: ISeries[] = [
    {
      nome: 'Breaking Bad (2008)',
      lancamento: '20/01/2008 (BR)',
      episodios: '62',
      classificacao: 10,
      cartaz: "https://img.elo7.com.br/product/zoom/1DFAEEB/poster-cartaz-breaking-bad-serie-netflix-sucesso.jpg",
      generos: ['Crime', 'Suspense', 'Drama', 'Humor'],
      pagina: '/breaking-bad',
      favorito: false
    },   
    {
      nome: 'The Midnight Gospel (2020)',
      lancamento: '20/04/2020',
      episodios: '9',
      classificacao: 9.5,
      cartaz: "https://upload.wikimedia.org/wikipedia/pt/f/f0/The_Midnight_Gospel.jpg",
      generos: ['Surrealismo', 'Humor', 'Fantasia Científica'],
      pagina: '/the-midnight-gospel',
      favorito: false
    },
    {
      nome: 'Family Guy (1999)',
      lancamento: '31/01/2021',
      episodios: '389',
      classificacao: 5,
      cartaz: "https://img.elo7.com.br/product/original/26A88D6/big-poster-serie-uma-familia-da-pesada-family-guy-l01-90x60-serie.jpg",
      generos: ['Sitcom', 'Pastelão', 'Comédia'],
      pagina: '/family-guy',
      favorito: false
    },
  ];
}