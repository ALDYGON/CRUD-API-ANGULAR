import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public lista: Cliente[] = [];

  // hace una lista desde interfaces usuario
  listarCliente(){
    this.http.get<Cliente[]>('http://127.0.0.1:8081/api/clientes')
    .subscribe((respuesta: any) => {
      this.lista = respuesta;
    });
  }

  agregarCliente(cliente: Cliente){
    this.http.post<any>('http://127.0.0.1:8081/api/clientes', cliente).subscribe();
  }

  eliminarCliente(id:number){
    this.http.delete<any>('http://127.0.0.1:8081/api/clientes/'+ id).subscribe();
  }

}
