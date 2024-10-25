import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private  http:HttpClient) { }

getAllProducts(){
  return this.http.get('https://fakestoreapi.com/products')
}
getAllcategories(){
  return this.http.get('https://fakestoreapi.com/products/categories')
}
getProductsByCategories(keyword:string){
  return this.http.get('https://fakestoreapi.com/products/category/'+keyword)
}
getproducrbyid(id:any){
  return this.http.get('https://fakestoreapi.com/products/'+id)
}
}
