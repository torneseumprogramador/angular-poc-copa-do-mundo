import { Cliente } from "../models/cliente";

export class ClienteServico{
    private static clientes:Cliente[] = []

    public static salvar(cliente:Cliente){
        ClienteServico.clientes.push(cliente);
    }

    public static all(){
        return ClienteServico.clientes;
    }
}