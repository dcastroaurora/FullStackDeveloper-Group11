import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get("http://cursos.tibajodemanda.com/cursos")
  }
}
