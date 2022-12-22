import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../Core/Models/product';
import { ProductService } from '../Core/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  //listProducts:Product[]=[{id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
  //{id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
 // {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]

listLength!:number ; 
product={id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}

  constructor(private productS:ProductService , private R:Router) { }

  ngOnInit(): void {
    this.productS.getAllProducts().subscribe(data=>this.listLength=data.length); 
 
  }
  
  save(f:NgForm){
    this.product.id=this.listLength+1
    this.productS.addProduct(this.product).subscribe(
     ()=> this.R.navigate(['product']),
      err=>alert('prob de back '), 
      ()=>alert('ajout effectuée')
     );
    // console.log(f);
    // console.log(f.controls['title'].value);
    // console.log(f.value);
    

  }

}
