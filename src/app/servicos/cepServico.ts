import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Cep } from "../models/cep";

export class CepServico{
    constructor(private http: HttpClient){ }

    public async getViaCep(cep:string): Promise<Cep|undefined>{
        cep = cep.replace(/-| |\./g, "").trim()
        return await this.http.get<Cep>(`${environment.cepHost}/ws/${cep}/json/`).toPromise()
    }
}