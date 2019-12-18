import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from "src/app/models/lista.model";
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList, {static: false}) lista: IonList;
  @Input() terminada = true;

  constructor( public deseosService: DeseosService, private router: Router,
                private alertCtrl: AlertController ) { }

  ngOnInit() {}

  listaSeleccionada( lista: Lista ){
    const listaId = lista.id;
    if( this.terminada ){
      this.router.navigateByUrl( `/tabs/tab2/agregar/${ listaId }` );
    } else {
      this.router.navigateByUrl( `/tabs/tab1/agregar/${ listaId }` );
    }
  }

  borrarLista( lista: Lista ){
    this.deseosService.borrarLista( lista );
  }

  async modificarLista( lista: Lista ){
    console.log("si entra");
    const alert = await this.alertCtrl.create({
      header: 'Modificar lista',
      inputs:[
        {
          name: 'titulo', 
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("cancelar");
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: ( data ) => {
            console.log( data );
            if( data.titulo.length === 0 ){
              return;
            }
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
  }


}
