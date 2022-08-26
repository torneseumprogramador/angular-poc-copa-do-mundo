import { IValidade } from "../interfaces/ivalidade";

export class NomeValidade implements IValidade{
    constructor(private nome:String) {}
    
    valido(): boolean {
        return this.nome !== undefined && this.nome != ""
    }

}