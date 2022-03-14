import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() sports?: Content;
  constructor() {
    
    this.sports = { id: 0, title: '', description: '', creator: '', imgURL: '' };
  }
  ngOnInit(): void {
  }

}