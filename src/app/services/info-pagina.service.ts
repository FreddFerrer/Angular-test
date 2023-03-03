import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaI } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaI = {};
  cargada: boolean = false;  

  constructor(private httpClient: HttpClient) {
  
    console.log('service info pagina cargada');

    this.httpClient.get('assets/data/data-pagina.json')
      .subscribe( (response: InfoPaginaI) => {
        //SI YO ACLARO DE QUE TIPO ES LA RESPUESTA PUEDO ACCEDER A LAS PROPIEDADES DEL JSON
        this.cargada = true;
        this.info = response;
        console.log(response);
      })

   }
}
