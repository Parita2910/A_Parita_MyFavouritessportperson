import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  @Output() newContentEvent = new EventEmitter<Content>();

  newContent: Content = {
    title: "", description: '', creator: '', type: undefined
  };
  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';

  constructor(private ContentService: ContentService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  addContentFromChild(): void {

    this.newContent.tags = this.tempTags.split(';');
    this.ContentService.addContent(this.newContent).subscribe((newContentFromServer) => {
      this.messageService.add("Sport successfully added to the server!");
      this.newContentEvent.emit(newContentFromServer);
    });

      this.newContent = {
        title: "", description: '', creator: '', type: undefined
      };
      this.tempId = "";
      this.tempTags = ""
   
  }

}
