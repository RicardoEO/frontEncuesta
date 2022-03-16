import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EncuestaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class EncuestaModule { }
