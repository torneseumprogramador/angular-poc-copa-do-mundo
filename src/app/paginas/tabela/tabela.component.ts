import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServico } from 'src/app/servicos/clienteServico';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.sass']
})
export class TabelaComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscaClienteApi()
  }
  
  private async buscaClienteApi() {
    this.clientes = await new ClienteServico(this.http).all()
  }

  public clientes:Cliente[]|undefined

}
