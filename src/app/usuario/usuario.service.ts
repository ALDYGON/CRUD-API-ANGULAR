import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  public lista: Usuario[] = [];

  // hace una lista desde interfaces usuario

  // metodos
  listarUsuario(){
    this.http.get<Usuario[]>('http://127.0.0.1:8081/api/administradores')
    .subscribe((respuesta: any) => {
      this.lista = respuesta;
    });
  }

  agregarUsuario(usuario: Usuario){
    this.http.post<any>('http://127.0.0.1:8081/api/administradores', usuario).subscribe();
  }

  eliminarUsuario(id:number){
    this.http.delete<any>('http://127.0.0.1:8081/api/usuarios/'+ id).subscribe();
  }

  editarUsuario(id:number, usuarioM:Usuario){
    this.http.put<Usuario[]>('http://127.0.0.1:8081/api/usuarios/'+ id,usuarioM)
    .subscribe((respuesta: any)=>{
      this.lista = respuesta;
    });
  }

  // editarUsuario(id:number,usuario: Usuario){
  //   this.http.put<any>('http://127.0.0.1:8080/api/usuarios/'+id, usuario).subscribe();
  // }

}
