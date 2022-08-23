import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public cliente:Cliente = {
    id: 1,
    nome: "danilo",
    email: "danilo@teste.com",
    senha: "123456",
    cep: "0993410",
    endereco: "Rua Gaivota",
    numero: 12,
    bairro: "Campanário",
    cidade: "Diadema",
    estado: "SP",
  } as Cliente

  public mostrarModelo(){
    console.log(this.cliente)
  }

}
