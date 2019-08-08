import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/providers/menu.service';

@Component({
  selector: 'app-alunos-page',
  templateUrl: './alunos-page.component.html',
  styleUrls: ['./alunos-page.component.sass']
})
export class AlunosPageComponent implements OnInit {

  constructor(public menu: MenuService) { }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }

}
