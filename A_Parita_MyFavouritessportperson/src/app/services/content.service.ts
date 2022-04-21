import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
  };
  
  constructor(private messageService: MessageService, private http: HttpClient) { }

  addContent(newSports: Content): Observable<Content>{
    this.messageService.add("Going to add sports to the server!");
    return this.http.post<Content>("api/sports", newSports, this.httpOptions);
  }

  updateContent(oldSports: Content): Observable<any>{
    return this.http.put("api/sports", oldSports, this.httpOptions);
    }

  getSportsList(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return this.http.get<Content[]>("api/sports");
  }

  getSingleSports(id: number): Observable<Content> {

    return this.http.get<Content>("api/sports/" + id);
 


  }
}



