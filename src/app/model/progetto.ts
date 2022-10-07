export class Progetto {
    id: number;
    titolo: string;
    img: string;
    link: string;

    constructor(id:number, titolo: string, img: string, link: string) {
        this.id = id;
        this.titolo = titolo;
        this.img = img;
        this.link = link;
    }

    get idProgetto(): number {
        return this.id;
    }
    set idProgetto(id: number) {
        this.id = id;
    }

    get titoloProgetto(): string {
        return this.titolo;
    }
    set titoloProgetto(titolo: string) {
        this.titolo = titolo;
    }

    get imgProgetto(): string {
        return this.img;
    }
    set imgProgetto(img: string) {
        this.img = img;
    }

    get linkProgetto(): string {
        return this.link
    }
    set linkProgetto(link: string) {
        this.link = link;
    }
}
