import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  searchMessage: string = "";
  searchFlag: boolean = false;
  sportsList: Content[];
  
  constructor(private ContentService: ContentService) {
    this.sportsList = [];
  }


  ngOnInit(): void {
  }

  checkForTitle(searchValue: string): void{
    let searchList = this.sportsList.filter(c => c.title == searchValue);
    if (searchList.length > 0){
      this.searchMessage  = "Found the sports!";
      this.searchFlag = true;
    }
    else{
      this.searchMessage  = "No sport with that title";
      this.searchFlag = false;
    }
  }
  addContentToParent(contentFromChild: Content) {
    console.log("got to the parent", contentFromChild);
    this.sportsList.push(contentFromChild);
    console.log("what's actually in the sports list? ", this.sportsList);
    this.sportsList = [...this.sportsList]; 
  }

  addContentToList(newContentItem: Content): void {
    this.ContentService.getSportsList().subscribe(list => {
      this.sportsList = list;
    });
  }
}


