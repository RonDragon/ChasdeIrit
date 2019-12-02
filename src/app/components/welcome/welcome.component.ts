import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'q';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {this.router.navigate(['admin-Component/tabs/tab1']); }, 1000);

  }

}
