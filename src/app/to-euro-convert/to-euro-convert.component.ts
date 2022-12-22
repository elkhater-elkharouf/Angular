import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css']
})
export class ToEuroConvertComponent implements OnInit {
  @Input() filsproperty : any;
  
  @Output() conversion = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  filspropertyConverted : Number = 0;
  convert() {
    this.filspropertyConverted = this.filsproperty * 3 ;
    this.conversion.emit("the conversion:" + this.filspropertyConverted + "euros");

  }
}
