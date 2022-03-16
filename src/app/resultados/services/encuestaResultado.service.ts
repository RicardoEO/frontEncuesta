import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestaResultadoService {
  
  private url = 'http://localhost:8090/encuesta';

  constructor( private http: HttpClient ) { }

  getCount(): Observable<any> {
    return this.http.get(`${this.url}/count`);
  }

  getTabla(): Observable<any> {
    return this.http.get(`${this.url}/all`);
  }

}
