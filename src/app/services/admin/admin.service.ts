import { Injectable } from '@angular/core';
import { Family } from 'src/app/models/beans/family/family';
import { Volunteer } from 'src/app/models/beans/volunteer/volunteer';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FamilyStatus } from 'src/app/models/enums/FamilyStatus/family-status.enum';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }
  public createFamily(family: Family): Observable<boolean> {
    return this.httpClient.post<boolean>('http://localhost:8080/rest/admin/createFamily', family, {withCredentials: true});
  }
  public  removeFamily(familyId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>('http://localhost:8080/rest/admin/removeFamily/' + familyId , {withCredentials: true});
  }
  public updateFamily(family: Family): Observable<boolean> {
    return this.httpClient.patch<boolean>('http://localhost:8080/rest/admin/updateFamily/', family, {withCredentials: true});
  }
  public updateFamilyAddress(family: Family): Observable<boolean> {
    return this.httpClient.patch<boolean>('http://localhost:8080/rest/admin/updateFamilyAddress/', family, {withCredentials: true});
  }
  public updateFamilyStatus(family: Family): Observable<boolean> {
    return this.httpClient.patch<boolean>('http://localhost:8080/rest/admin/updateFamilyStatus/', family, {withCredentials: true});
  }
  public setFamilyToVolunteer(familyId: number , volunteerId: number): Observable<boolean> {
    return this.httpClient.patch<boolean> ('http://localhost:8080/rest/admin/setFamilyToVolunteer/'+ volunteerId +'/'+ familyId ,{withCredentials: true});
  }
  public resetDeliveryStatusAndNotes(): Observable<boolean> {
    return this.httpClient.patch<boolean>('http://localhost:8080/rest/admin/resetDeliveryStatusAndNotes/', {withCredentials: true});
  }
  public getFamilyByID(familyId: number): Observable<Family> {
    return this.httpClient.get<Family>('http://localhost:8080/rest/admin/getFamilyByID/' + familyId, {withCredentials: true});
  }
  public getFamilyByName(familyName: string): Observable<string> {
    return this.httpClient.get<string>('http://localhost:8080/rest/admin/getFamilyByName/' + familyName, {withCredentials: true});
  }
  public getFamilyByFamilyStatus(familyStatus: FamilyStatus): Observable<Family []> {
// tslint:disable-next-line: max-line-length
    return this.httpClient.get<Family []>('http://localhost:8080/rest/admin/getFamilyByFamilyStatus/'+familyStatus, {withCredentials: true});
  }
  public getFamilyByDeliveryStatus(deliveryStatus: FamilyStatus): Observable<Family []> {
// tslint:disable-next-line: max-line-length
    return this.httpClient.get<Family []>('http://localhost:8080/rest/admin/getFamilyByDeliveryStatus/'+deliveryStatus, {withCredentials: true});
  }
  public getAllFamilys(): Observable<Family []> {
    return this.httpClient.get<Family []>('http://localhost:8080/rest/admin/getAllFamilys', {withCredentials: true});
  }
  public getAllVolunteerOfFamily(familyName: string): Observable<Volunteer []> {
    // tslint:disable-next-line: max-line-length
        return this.httpClient.get<Volunteer []>('http://localhost:8080/rest/admin/getFamilyByDeliveryStatus/'+familyName, {withCredentials: true});
   }
  public createVolunteer(volunteer: Volunteer): Observable<Volunteer> {
    return this.httpClient.post<Volunteer>('http://localhost:8080/rest/admin/createVolunteer', volunteer, {withCredentials: true});
  }
  public removeVolunteer(volunteerId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>('http://localhost:8080/rest/admin/removeVolunteer/' + volunteerId, {withCredentials: true});
  }
  public updateVolunteer(volunteer: Volunteer): Observable<boolean> {
    return this.httpClient.put<boolean>('http://localhost:8080/rest/admin/updateVolunteer', volunteer, {withCredentials: true});
  }
  public updateVolunteerPhoneNumber(volunteer: Volunteer): Observable<boolean> {
    return this.httpClient.put<boolean>('http://localhost:8080/rest/admin/updateVolunteer', volunteer, {withCredentials: true});
  }
  public updateVolunteerNumberOfBox(volunteer: Volunteer): Observable<boolean> {
    return this.httpClient.put<boolean>('http://localhost:8080/rest/admin/updateVolunteer', volunteer, {withCredentials: true});
  }
  public updateVolunteerPartner(volunteer: Volunteer): Observable<boolean> {
    return this.httpClient.put<boolean>('http://localhost:8080/rest/admin/updateVolunteer', volunteer, {withCredentials: true});
  }
  public getVolunteerById(volunteerId: number): Observable<number> {
    return this.httpClient.get<number>('http://localhost:8080/rest/admin/getVolunteerById/' + volunteerId, {withCredentials: true});
  }
  public getVolunteerByName(volunteerName: string): Observable<string> {
    return this.httpClient.get<string>('http://localhost:8080/rest/admin/getVolunteerByName/' + volunteerName, {withCredentials: true});
  }
  public getAllVolunteers(): Observable<Volunteer[]> {
    return this.httpClient.get<Volunteer[]>('http://localhost:8080/rest/admin/getAllVolunteers',  {withCredentials: true});
  }
  public getAllFamilyOfVolunteer(volunteerName: string): Observable<Volunteer []> {
    // tslint:disable-next-line: max-line-length
        return this.httpClient.get<Volunteer []>('http://localhost:8080/rest/admin/getAllFamilyOfVolunteer/'+volunteerName, {withCredentials: true});
   }
}
