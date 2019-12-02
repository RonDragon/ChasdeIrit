import { Component, OnInit } from '@angular/core';
import { Family } from 'src/app/models/beans/family/family';
import { Router } from '@angular/router/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-family-manage',
  templateUrl: './family-manage.component.html',
  styleUrls: ['./family-manage.component.scss']
})
export class FamilyManageComponent implements OnInit {
  public familyId: number;
  public password: string;
  public email: string;
  public family: Family = new Family();
  public familys: Family[];
  public flag = false;
  public serverFlag = false;
  public removeFlag = false;
  public updateFlag = false;
  public createFlag = false;
  public router: Router;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getAllFamilys().subscribe(
      familys => {
        this.flag = true;
        this.familys = familys;
        console.log(familys);
      },
      err => {
        if (err.status === 401) {
          alert('you are not logged in !');
          this.router.navigate(['login']);
        } else {
          alert(err.message);
        }
      }
    );
  }
  public updateFlagC(family: Family) {
    this.family = family;
    if (this.createFlag === true || this.removeFlag === true) {
      this.createFlag = false;
      if (this.removeFlag === true) {
        this.removeFlag = false;
      }
      this.updateFlag = true;
    } else {
      this.updateFlag = true;
    }
  }
  public updateFamily() {
    this.adminService.updateFamily(this.family).subscribe(
      flag => {
        this.serverFlag = flag;
        console.log(flag);
      },
      err => {
        if (err.status === 401) {
          alert('you are not logged in !');
          this.router.navigate(['login']);
        } else {
          alert(err.message);
        }
      }
    );
  }

  public removeFlagC(id: number) {
    alert(id);
    this.familyId = id;
    if (this.updateFlag === true || this.createFlag === true) {
      this.updateFlag = false;
      if (this.createFlag === true) {
        this.createFlag = false;
      }
      this.removeFlag = true;
    } else {
      this.removeFlag = true;
    }
  }
  public removeFamily() {
    this.adminService.removeFamily(this.familyId).subscribe(
      flag => {
        this.serverFlag = flag;
        console.log(flag);
      },
      err => {
        if (err.status === 401) {
          alert('you are not logged in !');
          this.router.navigate(['login']);
        } else {
          alert(err.message);
        }
      }
    );
  }
  public createFlagC() {
    if (this.updateFlag === true || this.removeFlag === true) {
      this.updateFlag = false;
      if (this.removeFlag === true) {
        this.removeFlag = false;
      }
      this.createFlag = true;
    } else {
      this.createFlag = true;
    }
  }
  public createFamily() {
    // tslint:disable-next-line: no-shadowed-variable
    this.adminService.createFamily(this.family).subscribe(
      flag => {
        this.flag = flag;
        console.log(flag);
      },
      err => {
        if (err.status === 401) {
          alert('you are not logged in !');
          this.router.navigate(['login']);
        } else {
          alert(err.message);
        }
      }
    );
  }
}
