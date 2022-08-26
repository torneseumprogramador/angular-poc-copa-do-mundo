import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cep } from 'src/app/models/cep';
import { Cliente } from 'src/app/models/cliente';
import { CepServico } from 'src/app/servicos/cepServico';
import { ClienteServico } from 'src/app/servicos/clienteServico';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  
  public cliente:Cliente = {} as Cliente
  public cep:Cep|undefined = {} as Cep
  public mensagem:String = ""

  public async salvar(){
    try{
      await new ClienteServico(this.http).salvar(this.cliente)
      this.router.navigateByUrl("/tabela")
    }
    catch(e:any){
      this.mensagem = e.error.mensagem
    }
  }
  
  public async buscaViaCep(){
    this.cep = await new CepServico(this.http).getViaCep(this.cliente.cep)
    if(this.cep){
      this.cliente.endereco = this.cep.logradouro
      this.cliente.bairro = this.cep.bairro
      this.cliente.cidade = this.cep.localidade
      this.cliente.estado = this.cep.uf
    }
  }

}
