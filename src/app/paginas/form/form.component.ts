import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/models/cep';
import { Cliente } from 'src/app/models/cliente';
import { CepServico } from 'src/app/servicos/cepServico';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscaClienteApi();
  }
  
  private async buscaClienteApi() {
    this.clientes = await this.http.get<Cliente[]>("http://localhost:8080/clientes.json").toPromise()
  }

  public clientes:Cliente[]|undefined
  public cliente:Cliente = {} as Cliente
  public cep:Cep|undefined = {} as Cep

  public async salvar(){
    await this.http.post<Cliente>("http://localhost:8080/clientes.json", this.cliente).toPromise()
    this.buscaClienteApi()
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
