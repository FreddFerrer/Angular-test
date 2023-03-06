import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-20583-default-rtdb.asia-southeast1.firebasedatabase.app/productos_idx.json')
      .subscribe( (resp: ProductoInterface[]) => {
        this.productos = resp;
        console.log(resp);
        this.cargando = false;
      }
      )
  }
}
