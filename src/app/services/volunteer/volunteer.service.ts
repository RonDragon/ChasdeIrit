import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Family } from 'src/app/models/beans/family/family';
import { Observable } from 'node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private httpClient: HttpClient) { }
  
  public getMyFamily(): Observable<Family []> {
    return this.httpClient.get<Family []>('http://localhost:8080/rest/volunteer/getMyFamily', {withCredentials: true});
  }
  public setDeliveryStatusAndNotes(family: Family): Observable<boolean> {
// tslint:disable-next-line: max-line-length
    return this.httpClient.patch<boolean>('http://localhost:8080/rest/volunteer/setDeliveryStatusAndNotes/', family, {withCredentials: true});
  }
}
