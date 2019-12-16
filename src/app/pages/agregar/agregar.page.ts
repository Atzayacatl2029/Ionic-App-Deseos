import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;

  constructor( private deseosService: DeseosService, private route: ActivatedRoute ) {
    const listaId = this.route.snapshot.paramMap.get( 'listaId' );
    this.lista = this.deseosService.obtenerLista( listaId );

    console.log(this.lista);

   }

  ngOnInit() {
  }

}
