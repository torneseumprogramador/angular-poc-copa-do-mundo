import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Cliente } from "../models/cliente";

export class ClienteServico{
    constructor(private http: HttpClient){ }
    
    public async salvar(cliente:Cliente){
        await this.http.post<Cliente>(`${environment.apiHost}/clientes.json`, cliente).toPromise()
    }

    public async all(){
        return await this.http.get<Cliente[]>(`${environment.apiHost}/clientes.json`).toPromise()
    }
}