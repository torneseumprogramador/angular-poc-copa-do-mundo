import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cep } from 'src/app/models/cep';
import { Cliente } from 'src/app/models/cliente';
import { ClientePresenter } from 'src/app/models/presenters/clientePresenter';
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
  
  public csenha:String = ""
  public cliente:Cliente = {} as Cliente
  public cep:Cep|undefined = {} as Cep
  public mensagem:String = ""

  public async salvar(){
    try{
      if(new ClientePresenter(this.cliente, this.csenha).valido()){
        await new ClienteServico(this.http).salvar(this.cliente)
        this.router.navigateByUrl("/tabela")
        return
      }

      this.mensagem = "<h1>Confira os erros abaixo:</h1>"
      this.mensagem += "<p>Email é obrigatório</p>"
      this.mensagem += "<p>Senha com confirmação de senha</p>"
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
