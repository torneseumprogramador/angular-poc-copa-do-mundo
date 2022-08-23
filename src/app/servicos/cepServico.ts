import { HttpClient } from "@angular/common/http";
import { Cep } from "../models/cep";

export class CepServico{
    constructor(private http: HttpClient){ }

    public async getViaCep(cep:string): Promise<Cep|undefined>{
        cep = cep.replace(/-| |\./g, "").trim()
        return await this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`).toPromise()
    }
}