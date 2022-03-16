import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ResultadoComponent],
  imports: [
    RouterModule,
    CommonModule,
    ChartsModule
  ]
})
export class ResultadosModule { }
