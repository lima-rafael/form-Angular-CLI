//import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor() { }
}
// estado de abertura
// opcoes do menu
// comportamento de abrir
// comportamento de fechar

import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class MenuService {
  opened: boolean = false;
  options: any[] = [
    {
      icon: 'fa fa-home',
      text: 'Home',
      route: '/'
    },
    {
      icon: 'fa fa-gamepad',
      text: 'Alunos',
      route: '/alunos'
    }
  ]
  constructor() { }
  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  fix() {
    if (document.body.scrollTop > 65) {
      $('section.outer').addClass('margin-fix');
    } else {
      $('section.outer').removeClass('margin-fix');
    }
  }

}