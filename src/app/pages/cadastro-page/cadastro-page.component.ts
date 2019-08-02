import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/providers/menu.service';

@Component({
  selector: 'app-cadastro-page',
  templateUrl: './cadastro-page.component.html',
  styleUrls: ['./cadastro-page.component.sass']
})
export class CadastroPageComponent implements OnInit {

  constructor(public menu: MenuService) { }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }


}
