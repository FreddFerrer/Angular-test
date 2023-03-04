import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaI } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaI = {};
  cargada: boolean = false;  
  equipo: any[] = [];

  constructor(private httpClient: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
   }

  private cargarInfo(){
    this.httpClient.get('assets/data/data-pagina.json')
    .subscribe( (response: InfoPaginaI) => {
    //SI YO ACLARO DE QUE TIPO ES LA RESPUESTA PUEDO ACCEDER A LAS PROPIEDADES DEL JSON
    this.cargada = true;
    this.info = response;
    
    })
   }

  private cargarEquipo(){
    this.httpClient.get('https://angular-html-20583-default-rtdb.asia-southeast1.firebasedatabase.app/.json')
    .subscribe( (res: { equipo: any[] }) => {
      this.equipo = res.equipo;
      console.log('funciona???');
      console.log(res);
    })
  }
}
