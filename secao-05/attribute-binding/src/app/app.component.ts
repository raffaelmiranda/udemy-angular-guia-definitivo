import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buttonTitle = 'Titulo do botão';
  buttonDisable = false;

  onButtonClick(){
    this.buttonTitle = "Titulo Alterado";
    this.buttonDisable = !this.buttonDisable;
  }
}
