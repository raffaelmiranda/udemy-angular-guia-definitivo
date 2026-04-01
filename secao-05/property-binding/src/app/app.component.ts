import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  inputText = "Texto Inicial Alterado";
  inputType = "text";
  isDisable = false;

  enableInput() {
    this.isDisable = false;
  }

  disableInput() {
    this.isDisable = true;
  }

  setPasswordInput(){
    this.inputType = 'password';
  }

  setTextTypeInput(){
    this.inputType = 'text';
  }

  logInputText(){
    console.log(this.inputText);
  }
}
