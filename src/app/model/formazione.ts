export class Formazione {
    img: string;
    titolo: string;

    constructor(img: string, titolo: string) {
        this.img = img;
        this.titolo = titolo;
    }

    get imgFormazione(): string {
        return this.img;
    }
    set imgFormazione(img: string) {
        this.img = img;
    } 

    get titoloFormazione(): string {
        return this.titolo;
    }
    set titoloFormazione(titolo: string) {
        this.titolo = titolo;
    }     
}
