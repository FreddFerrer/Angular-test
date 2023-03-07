import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];
  productosFiltrado: ProductoInterface[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise( ( resolve, reject ) => {
      this.http.get('https://angular-html-20583-default-rtdb.asia-southeast1.firebasedatabase.app/productos_idx.json')
      .subscribe( (resp: ProductoInterface[]) => {
        this.productos = resp;
        this.cargando = false;
        
      });
    });
  }

  getProducto( id: string){
    return this.http.get(`https://angular-html-20583-default-rtdb.asia-southeast1.firebasedatabase.app/productos/${id}.json`)
  }

  buscarProducto(termino: string ){

    if(this.productos.length === 0){
      this.cargarProductos().then( () => {
        this.filtrarProductos(termino);
        
      } )
    } else {
      this.filtrarProductos(termino)
    }
  }

  private filtrarProductos(termino: string){
    this.productosFiltrado = []

    termino = termino.toLowerCase();

    this.productos.forEach( prod=> {

      const tituloLower = prod.titulo.toLowerCase();
      const categoriaLower = prod.categoria.toLowerCase();

      if(categoriaLower.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ){
        this.productosFiltrado.push(prod);
      } 
    })
  }
}
