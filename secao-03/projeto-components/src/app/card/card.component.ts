import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  tipo = 'Teste';
  preco = 100;
  getFullPrice() {
    return 'R$' + this.preco + ',00/Mês';
  }

  /* plano = {
    infos: {
      tipo: 'Combo',
      preco: 200,
    },
  };*/

  // @ts-ignore
  plano2: any = {
    infos: undefined,
  };
}
