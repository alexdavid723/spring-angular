import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  titulo:String="Lista de clientes";

  clientes: Cliente[];


  constructor(private clienteService:ClienteService){}
    ngOnInit():void{
      this.clienteService.getAll().subscribe(
        e => this.clientes=e
      );

  }

}
