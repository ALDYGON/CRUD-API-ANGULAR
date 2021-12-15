import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Interfaces/usuario.interface';
import { ListausuarioComponent } from '../listausuario/listausuario.component';

import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarioeditar',
  templateUrl: './usuarioeditar.component.html',
  styleUrls: ['./usuarioeditar.component.css']
})
export class UsuarioeditarComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { 
    this.usuarioService.listarUsuario();
  }

  ngOnInit(): void {
  }

  
  

  editar(inputNombre: string,inputLogin: string,inputPassword: string,inputEstado: number,inputTarea: string){
    const nuevoUsuario: Usuario = {
      id: 0,
      nombre: inputNombre,
      usuario: inputLogin,
      contrasena: inputPassword,
      estado: inputEstado,
      tarea: inputTarea
    };

    this.usuarioService.editarUsuario(parseInt("1"),nuevoUsuario);
  }
}
