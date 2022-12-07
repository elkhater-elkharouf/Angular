import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../Core/Models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product={id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}

  constructor() { }

  ngOnInit(): void {
  }
  
  save(f:NgForm){
   
    console.log(f);
    console.log(f.controls['title'].value);
    console.log(f.value);
    

  }

}
