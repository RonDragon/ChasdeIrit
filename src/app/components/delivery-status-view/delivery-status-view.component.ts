import { Component, OnInit } from '@angular/core';
import { Family } from 'src/app/models/beans/family/family';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Router } from '@angular/router/router';

@Component({
  selector: 'app-delivery-status-view',
  templateUrl: './delivery-status-view.component.html',
  styleUrls: ['./delivery-status-view.component.scss'],
})
export class DeliveryStatusViewComponent implements OnInit {
  public familys: Family[];
  public flag = false;
  public router: Router;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllFamilys().subscribe( familys => {
      this.flag = true;
      this.familys = familys;
      console.log(familys);
    }, err => { if (err.status === 401) {
      alert('you are not logged in !');
      this.router.navigate(['login']);
    } else {
      alert(err.message);
    }
  });

}
}

