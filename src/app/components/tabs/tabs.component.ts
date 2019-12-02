import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss']
})
export class TabsComponent {

  title = {
home : 'דף הבית',
manager : 'כניסה למנהל',
volunteer : 'כניסה למנתדב',
}

  constructor() {}

}
