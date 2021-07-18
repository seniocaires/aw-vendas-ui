import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Venda } from './venda';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  urlApi: string = environment.urlApi;

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/vendas`);
  }

  salvar(venda: Venda): Observable<any> {
    return this.http.post(`${this.urlApi}/vendas`, venda);
  }

}
