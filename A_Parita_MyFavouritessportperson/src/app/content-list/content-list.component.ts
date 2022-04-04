import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  sportsList: Content[];
  constructor() {
    this.sportsList = [{
      id: 0,
      title: "K.L.Rahul",
      description: "Indian Cricket Player",
      creator: "Indian Cricket Team",
      imgURL: "https://imagevars.gulfnews.com/2019/12/19/KL-Rahul_16f1ef8d4ee_large.jpg",
      tags: ["T20Player", "ODIPlayer"]
    }, {
      id: 1,
      title: "David Beckham",
      description: "English Former Professional Footballer",
      //creator: "England",
      imgURL: "https://media.gq.com/photos/5b7eb51148ac8415e718f9ec/16:9/pass/david-beckham-gq-0416-cover-sq.jpg",
      tags: ["Manchester United","Real Madrid"]
    }, {
      id: 2,
      title: "Viral Kohli",
      description: "Indian Captain",
      creator: "Indian Cricket Team",
      imgURL: "https://www.southasianweekender.ca/wp-content/uploads/2020/11/Virat.jpg",
      tags: ["IndianCaptain", "MostSuccessfulPlayer"]
    }, {
      id: 3,
      title: "Cristiano Ronaldo",
      description: "Portuguese professional footballer",
      //creator: "Manchester United",
      imgURL: "https://image-cdn.essentiallysports.com/wp-content/uploads/IMG_20200101_180215-scaled.jpg",
      tags: ["#BestFootballerOfAllTime","HandsomePlayer"]
    }, {
      id: 4,
      title: "Stephen Curry",
      description: "American professional basketball player",
      creator: "NBA",
      imgURL: "https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2017/05/31/gettyimages-682346056.jpg",
      tags: ["GoldenStateWarriors","NBAChampion"]
    }, {
      id: 5,
      title: "Jasprit Bumrah",
      description: " Indian international cricketer",
      creator: "Indian Cricket Team",
      imgURL: "https://resources.pulse.icc-cricket.com/ICC/photo/2019/07/07/b7407bba-8fc7-4c7f-8ec6-6e2c3166865a/Bumrah.jpg",
      tags: ["FastBaller","RightArm"]
    }];
  }

  ngOnInit(): void {
  }

}