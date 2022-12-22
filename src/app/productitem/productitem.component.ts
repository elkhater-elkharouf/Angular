import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Core/Models/product';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @Input()productItem !: Product;
  @Input()prix!:Number;
  constructor() { }

  ngOnInit(): void {
  }
  Like(id:number){
  
  }

  Buy(id:number)
  {
  
  }
  updateProduct(id:number){}
  deleteProduct(id:number){}

}
