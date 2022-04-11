import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  bunchOfSports: Content[];

  constructor(private SportsService: SportsService) {
    this.bunchOfSports = [];
    
   }
   ngOnInit(): void {
    this.getSportsFromServer();
  }

  getSportsFromServer(): void{
    this.SportsService.getContent().subscribe(sportsArray => this.bunchOfSports = sportsArray);
  }

  addSportsToList(newSportsFromChild: Content): void {
    this.SportsService.addContent(newSportsFromChild).subscribe(newContentFromServer => {
      console.log("New content from server: ", newContentFromServer);
     
      this.bunchOfSports.push(newContentFromServer);
      this.bunchOfSports = [...this.bunchOfSports]; 

    });
  }
}