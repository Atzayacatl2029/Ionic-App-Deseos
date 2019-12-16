import { ListaItem } from './lista-item.model';


export class Lista {

    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEnd: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor( titulo: string ){
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false; 
        this.items = [];
        //Lo ideal seria que una base de datos nos de el Id generado automaticamente
        this.id = new Date().getTime();
    }

}