import { NgModule } from '@angular/core';
import { Comp1Component } from './comp-1/comp-1.component';
import { Comp2Component } from './comp-2/comp-2.component';

@NgModule({
  declarations: [Comp1Component, Comp2Component],
  imports: [],
  exports: [Comp1Component, Comp2Component],
})
export class ComponentsModule {}

//Para usar os componentes 1 e 2 como filhos, deve:
//No modulo pai em imports: [ComponentsModule] e
//No modulo filho em exports: [Comp1Component, Comp2Component]
