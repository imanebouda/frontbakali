import { Component } from '@angular/core';
import {ProductModel} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products !: ProductModel[];
  constructor(private productService : ProductService,public authService: AuthService) {
    productService.productList().subscribe(p=>{
      //console.log(p);
      this.products=p;

    })

    //this.products=productService.productList();


  }
  deleteProduct(product:ProductModel){
    let message =confirm("Are you sure to delete this product ? ");
    if(message)
    this.productService.deleteProduct(product.idProduct!).subscribe(()=>{
      this.loadProducts();

    });
  }
  loadProducts(){
    this.productService.productList().subscribe(p=>
      {this.products=p;}
    )
  }


}
