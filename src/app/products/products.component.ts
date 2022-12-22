import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Product } from '../Core/Models/product';
import { ProductService } from '../Core/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // providers:[ProductService]
})
export class ProductsComponent implements OnInit {

  listProdcuts!:Product[]

    prix!:number ; 
    

  constructor(private r:Router , private productServ : ProductService) { }

  ngOnInit(): void {
   this.productServ.getAllProducts().subscribe(
    resp=>this.listProdcuts=resp , 
    err=>alert('prob de back '), 
    ()=>alert('recuperation effectuée')
   ) ; 

  }
like (indice:number){
  this.listProdcuts[indice].like++ ;

}
buy (indice:number){
this.listProdcuts[indice].quantity-- ; 

}
routage(){
  this.r.navigate(['user']); 
}
edit(id:any){
  this.r.navigate(['editProduct',id]);
  
  
}
addProduct(){
  this.r.navigate(['addProduct'])
}
delete(id:number){
  this.productServ.delete(id).subscribe(
    ()=>window.location.reload()
     );
      }

}
