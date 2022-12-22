import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../Core/Models/Actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input()actorItem !: Actor;
  @Output() sender = new  EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  deleteActor(actorItem : Actor){
    this.sender.emit(actorItem);
  }
}
