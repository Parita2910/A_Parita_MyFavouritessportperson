import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

import { SportsService } from '../services/sports.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {


  sportslist: Content[];
  gallery_id!: number;
  oneItem:Content[] = [];
  constructor(private SportsService: SportsService) {
    this.sportslist = [];
    
   }
  
  ngOnInit(): void {
    this.SportsService.getContentObs().subscribe(sportArray => this.sportslist = sportArray);
    this.SportsService.getContentSports(3).subscribe(fetsports => {
      this.oneItem = fetsports;
    });
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
=======

    });

  }
}