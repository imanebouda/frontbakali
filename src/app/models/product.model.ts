import {CategoryModel} from "./Category.model";

export class ProductModel{
  idProduct !: number ;
  nameProduct !: string;
  priceProduct !: number ;
  dateCreate !: Date ;
  category ! : CategoryModel | undefined;



}
