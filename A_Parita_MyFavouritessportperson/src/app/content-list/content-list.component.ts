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

}