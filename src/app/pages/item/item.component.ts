import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripInterface } from '../../interfaces/producto-descrip.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripInterface;
  id: string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService){}


  ngOnInit(): void {
    this.route.params.subscribe(
      paramentros => {
        this.productoService.getProducto(paramentros['id'])
          .subscribe( (producto: ProductoDescripInterface) => {
            this.id = paramentros['id'];
            this.producto = producto;
            console.log(producto);
          })
      }
    )
  }

}
