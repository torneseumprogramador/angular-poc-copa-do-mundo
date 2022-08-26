import { IValidade } from "../interfaces/ivalidade";

export class ValidarObserver{

    private observados:IValidade[] = []

    public subscribe(validade:IValidade){
        this.observados.push(validade)
    }

    public dispatcher(): boolean {
        let validado = true
        this.observados.forEach(observado => {
            validado = observado.valido()
            if(!validado) return
        });
        return validado
    }
}