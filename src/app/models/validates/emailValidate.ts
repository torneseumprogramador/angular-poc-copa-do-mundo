import { IValidade } from "../interfaces/ivalidade";

export class EmailValidade implements IValidade{
    constructor(private email:String) {}
    
    valido(): boolean {
        return this.email !== undefined && this.email != ""
    }

}