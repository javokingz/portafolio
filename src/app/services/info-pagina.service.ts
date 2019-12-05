import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada = false;

  constructor( private http: HttpClient) { 

    console.log("Pagina cargada correctamente");

    //Leer el archio JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( resp => {

      //console.log(resp);
      this.cargada = true;
      this.info = resp;
      //console.log( resp['facebook'] );
       console.log(resp);

    })
  }
}
