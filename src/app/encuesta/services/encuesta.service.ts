import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private url = 'http://localhost:8090/encuesta'

  constructor( private http: HttpClient ) { }

  registrarEncuesta(encuesta): Observable<any> {
    return this.http.post(`${this.url}/save`, encuesta);
  }

}
