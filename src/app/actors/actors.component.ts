import { Component, OnInit } from '@angular/core';
import { ActorComponent } from '../actor/actor.component';
import { Actor } from '../Core/Models/Actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor() { }
  listActors: Actor[]=[
    {'lastName':'Robert','firstName':'Julia'},
    {'lastName':'Walker','firstName':'Paul'},
    {'lastName':'Pitt','firstName':'Brad'}  
  ]
  ngOnInit(): void {
  }
  Delete(element : any){
    this.listActors = this.listActors.filter(e => e != element);
   }
}
