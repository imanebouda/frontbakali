import { Injectable } from '@angular/core';
import {ProductModel} from "../models/product.model";
import {CategoryModel} from "../models/Category.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";


const httpOptions ={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })

};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL:string="http://localhost:8080/api";

  products : ProductModel[];
  product !: ProductModel;
  categories :CategoryModel[];
  category !: CategoryModel;
  constructor(private http :HttpClient) {
    this.categories=[
   ];
    this.products =[

    ];
  }
  productList(){
    return this.http.get<ProductModel[]>(this.apiURL+"/products",httpOptions);
  }
  addProduct(product : ProductModel){

    return this.http.post<ProductModel>(this.apiURL+"/products/save",product,httpOptions);

  }
  deleteProduct(id :number){
    return this.http.delete(this.apiURL+"/products/"+id);
  }

  editProduct(id:number){
    return this.http.get<ProductModel>(`${this.apiURL+"/products"}/${id}`);


  }
  updateProduct(product : ProductModel)  {
    return this.http.put<ProductModel>(this.apiURL+"/products/update",product,httpOptions);
  }

  sortProducts(){
    this.products.sort(
      (x,y)=>
        (x.idProduct! > y.idProduct! ? 1 : -1 )
    )

  }
  categoriesList(){
    return this.http.get<CategoryModel[]>(this.apiURL+"/categories",httpOptions);
  }
  editCategory(id:number){
    this.category  =this.categories.find(c=>c.idCatecory==id)!;
    return this.category;


  }
}
