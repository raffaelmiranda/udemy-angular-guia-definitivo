import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    //declaração de componentes, pipes, diretivas
    AppComponent,
  ],
  imports: [
    //Usar uma funcionalidae, componentes, pipes, diretivas que é outro modulos
    BrowserModule,
    ComponentsModule,
  ],
  providers: [
    //Service desse modulo
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
