import { NgModel } from "@angular/forms";
 
export class Abilita {
    id: number;
    nome: string;
     
    constructor(nome: string, id: number) {
        this.nome = nome;
        this.id = id;
    }
 
    get idAbilita(): number {
        return this.id;
    }
    set idAbilita(id: number) {
        this.id = id;
    }
 
    get nomeAbilita(): string {
        return this.nome;
    }
    set nomeAbilita(nome: string) {
        this.nome = nome;
    }
}
