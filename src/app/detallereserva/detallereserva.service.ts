import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleReserva } from '../Interfaces/detalleReserva.interface';

@Injectable({
  providedIn: 'root'
})
export class DetallereservaService {

  constructor(private http: HttpClient) { }

  public lista: DetalleReserva[] = [];

  // hace una lista desde interfaces usuario
  listarDetalle(){
    this.http.get<DetalleReserva[]>('http://127.0.0.1:8081/api/detalle')
    .subscribe((respuesta: any) => {
      this.lista = respuesta;
    });
  }

  agregarDetalle(detalle: DetalleReserva){
    this.http.post<any>('http://127.0.0.1:8081/api/detalle', detalle).subscribe();
  }

  eliminarDetalle(id:number){
    this.http.delete<any>('http://127.0.0.1:8081/api/detalle/'+ id).subscribe();
  }


}
