import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newSports?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  addSports(title: string,description: string, creator: string, imgURL: string,type: string, tags: string): void {
    this.newSports = {
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(",")
    };
    this.newGameEvent.emit(this.newSports);
  }

}
