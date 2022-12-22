import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../Core/Models/product';
import { ProductService } from '../Core/Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
id!:number;
product!:Product ; 
constructor(private actR:ActivatedRoute , private productS:ProductService, private R:Router) { }

  ngOnInit(): void {
    //this.id =this.actR.snapshot.params['id'] ;
    //
    this.actR.paramMap.subscribe(params=>this.id=Number(params.get('id')));
    this.productS.getProductById(this.id).subscribe(
      resp=>this.product=resp)
  }

  update(F:NgForm){
    this.productS.update(this.id,this.product).subscribe(
     ()=> this.R.navigate(['product']) 
    ) ; 
    


  }
}
