import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryModel} from "../models/Category.model";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit  {
  currentProduct =new ProductModel();
  categories !:CategoryModel[];
  newCategory!: CategoryModel;
  newCategoryId!: number;
  constructor(

    private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRoute:ActivatedRoute,
    private router : Router) {
    //this.categories=productService.categoriesList();


  }
  ngOnInit() {

    this.productService.categoriesList().subscribe(c=>{
      this.categories=c;
    })
    this.productService.editProduct(this.activatedRoute.snapshot.params['id']).subscribe(p=>{
      this.currentProduct=p;
      this.newCategoryId = this.currentProduct.category?.idCatecory!;
    });
  }
  updateProduct(){
   // this.categoryService.categoryById(this.newCategoryId).subscribe(c=> this.currentProduct.category=c);
    this.currentProduct.category= this.categories.find(c=>c.idCatecory==this.newCategoryId);
    this.productService.updateProduct(this.currentProduct).subscribe(p=>{
      this.router.navigate(['products-list']);

    })


  }

}
