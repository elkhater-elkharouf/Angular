import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
id!:number;
constructor(private actR:ActivatedRoute) { }

  ngOnInit(): void {
    //this.id =this.actR.snapshot.params['id'] ;
    //
    this.actR.paramMap.subscribe(params=>this.id=Number(params.get('id')));
  }

}
