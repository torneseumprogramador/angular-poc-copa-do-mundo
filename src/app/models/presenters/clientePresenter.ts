import { Cliente } from "../cliente";
import { ValidarObserver } from "../observers/validarObserver";
import { EmailValidade } from "../validates/emailValidate";
import { NomeValidade } from "../validates/nomeValidate";

export class ClientePresenter{
    constructor(
        private cliente:Cliente, 
        private csenha:String
    ){}

    ///======== Um código de presenter simples ========
    // private validadeEmail() : boolean{
    //     return (this.cliente.email != undefined && this.cliente.email.length > 0);
    // }

    // private nomeValido() : boolean{
    //     return (this.cliente.nome != undefined && this.cliente.nome.length > 0);
    // }

    // private cepValido() : boolean{
    //     return (this.cliente.cep != undefined && this.cliente.cep.length > 0);
    // }

    // private csenhaValidade() : boolean{
    //     return (this.cliente.senha == this.csenha);
    // }

    // public valido() : boolean{
    //     return (this.cepValido() &&
    //             this.nomeValido() &&
    //             this.validadeEmail() &&
    //             this.csenhaValidade() )
    // }
    ///======== Um código de presenter simples ========

    ///======== Um presenter utilizandfo observer ========
    public valido() : boolean{
        let observer = new ValidarObserver();
        observer.subscribe(new EmailValidade(this.cliente.email))
        observer.subscribe(new NomeValidade(this.cliente.nome))
        return observer.dispatcher();
    }
    ///======== Um presenter utilizandfo observer ========
}