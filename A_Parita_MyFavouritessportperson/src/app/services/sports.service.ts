import { Injectable } from '@angular/core';
import { SPORTS } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor() { }

  getContent(): Content[] { 
    return SPORTS;
  }

  getContentObs(): Observable<Content[]> { 
    return of(SPORTS);
  }

  getContentSports(id:Number): Observable<Content[]> {
    const sportFiltered = SPORTS.filter(sport => {
      return sport.id === Number(id);
    });
    return of(sportFiltered);
  } 
}
