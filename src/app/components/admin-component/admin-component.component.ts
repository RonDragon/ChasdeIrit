import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin-component.html',
  styleUrls: ['admin-component.scss']
})
export class AdminComponent {

  title = {
    volunteerManage : 'ניהול מתנדבים',
    familyManage : 'ניהול משפחות',
    linkFamilyToVolunteer : 'ציוות משפחה למתנדב',
    deliveryStatusView : 'מסך חלוקה',
  }
  constructor() {}

}
