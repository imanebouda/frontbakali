import { Component } from '@angular/core';
import {ProductModel} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {CategoryModel} from "../models/Category.model";
import {Router} from "@angular/router";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct=new ProductModel();
  categories !:CategoryModel[];
  newCategory!: CategoryModel;
  newCategoryId!: number;
    constructor(private productService :ProductService,private categoryService :CategoryService,private router : Router) {

      productService.categoriesList().subscribe(c=>{
        this.categories=c;
      })

  }
  addProduct(){
  //  this.newCategoryId=;

   // this.categoryService.categoryById(this.newCategoryId).subscribe(c=>{
      //this.newProduct.category=c;
   // })

    //console.log(this.newProduct.category);


     this.newProduct.category =this.categories.find(c=>c.idCatecory==this.newCategoryId);

    this.productService.addProduct(this.newProduct).subscribe(p=>{
      this.router.navigate(['products-list'])
    });

  }


}
