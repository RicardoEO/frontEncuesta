import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { EncuestaModule } from './encuesta/encuesta.module';
import { ResultadosModule } from './resultados/resultados.module';
import { AppRoutingModule } from './app-routing-module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    EncuestaModule,
    ResultadosModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
