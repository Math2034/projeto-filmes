import { Component } from '@angular/core';
import { IAtores } from '../models/IAtores';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  listaAtores: IAtores[] = [
    {
      nome: 'Tom Cruise',
      idade: '03/07/1962 ',
      sexo: 'Masculino',
      rosto: "https://www.ofuxico.com.br/wp-content/uploads/2022/01/tomcruise.jpg",
      pagina: '/tom-cruise',
      favorito: false
    },   
    {
      nome: 'Ryan Gosling',
      idade: '12/11/1980',
      sexo: 'Masculino',
      rosto: "https://br.web.img3.acsta.net/c_310_420/pictures/16/05/17/17/28/208580.jpg",
      pagina: '/ryan-gosling',
      favorito: false
    }, 
    {
      nome: 'Nicolas Cage',
      idade: '07/01/1964',
      sexo: 'Masculino',
      rosto: "https://cf.shopee.com.br/file/a426cd7a5efdbe3014851490c8c2671b",
      pagina: '/Nicolas-Cage',
      favorito: false
    }
  ];
}