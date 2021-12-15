import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurante } from '../Interfaces/restaurante.interface';


@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient) { }

  public lista: Restaurante[] = [];

  // hace una lista desde interfaces usuario
  listarRestaurante(){
    this.http.get<Restaurante[]>('http://127.0.0.1:8081/api/restaurante')
    .subscribe((respuesta: any) => {
      this.lista = respuesta;
    });
  }

  agregarRestaurante(restaurante: Restaurante){
    this.http.post<any>('http://127.0.0.1:8081/api/restaurante', restaurante).subscribe();
  }

  eliminarRestaurante(id:number){
    this.http.delete<any>('http://127.0.0.1:8081/api/restaurante/'+ id).subscribe();
  }

}
