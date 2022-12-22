import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
URL="http://localhost:3000/product"

  // listProdcut:Product[]=[
  //   {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
  //   {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
  //   {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Product[]>{
    // return this.listProdcut ; 

    return this.http.get<Product[]>(this.URL) ; 
  }
  getProductById(id:number):Observable<Product>{
    // return this.listProdcut ; 

    return this.http.get<Product>(this.URL+'/'+id) ; 
  }
  addProduct(P: Product){
    // this.listProdcut.push(P); 
    return this.http.post(this.URL,P); 
  }
delete(id:number):Observable<Product>{
  return this.http.delete<Product>(this.URL+'/'+id); 
}
update(id:number , P:Product):Observable<Product>{
  return this.http.put<Product>(this.URL+'/'+id,P);

}
}
