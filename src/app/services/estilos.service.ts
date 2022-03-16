import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstilosService {

  private url = 'http://localhost:8090/estilos'

  constructor( private http: HttpClient ) { }

  getEstilos(): Observable<any> {
    return this.http.get(`${this.url}/all`);
  }
}
