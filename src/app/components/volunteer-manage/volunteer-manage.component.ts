import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Volunteer } from 'src/app/models/beans/volunteer/volunteer';
import { Router } from '@angular/router/router';
import { Family } from 'src/app/models/beans/family/family';

@Component({
  selector: 'app-volunteer-manage',
  templateUrl: './volunteer-manage.html',
  styleUrls: ['./volunteer-manage.scss'],
})
export class VolunteerManageComponent implements OnInit {
  public familys: Family[];
  public volunteerId: number ;
  public password: string ;
  public email: string ;
  public volunteer: Volunteer = new Volunteer();
  public volunteerCreate: Volunteer = new Volunteer();
  public volunteers: Volunteer[];
  public flag = false;
  public serverFlag = false;
  public removeFlag = false;
  public updateFlag = false;
  public createFlag = false;
  public router: Router;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllVolunteers().subscribe( volunteers => {
      this.flag = true;
      this.volunteers = volunteers;
      console.log(volunteers);
    }, err => { if (err.status === 401) {
      alert('you are not logged in !');
      this.router.navigate(['login']);
    } else {
      alert(err.message);
    }
  });
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
  public updateFlagC(volunteer: Volunteer) {
    this.volunteer = volunteer;
    if (this.createFlag === true || this.removeFlag === true ) {
     this.createFlag = false;
     if (this.removeFlag === true) {
     this.removeFlag = false;
     }
     this.updateFlag = true;
   } else {
   this.updateFlag = true;
   }
   }
   public updateVolunteer() {
    this.adminService.updateVolunteer(this.volunteer).subscribe(flag => {
      this.serverFlag = flag;
      console.log(flag);
    }, err => { if (err.status === 401) {
      alert('you are not logged in !');
      this.router.navigate(['login']);
    } else {
      alert(err.message);
    }
  });
}

      public removeFlagC(id: number) {
        alert(id);
        this.volunteerId = id;
        if (this.updateFlag === true || this.createFlag === true ) {
         this.updateFlag = false;
         if (this.createFlag === true) {
         this.createFlag = false;
         }
         this.removeFlag = true;
       } else {
       this.removeFlag = true;
      }
     }
     public removeVolunteer() {
      this.adminService.removeVolunteer(this.volunteerId).subscribe(flag => {
        this.serverFlag = flag;
        console.log(flag);
      }, err => { if (err.status === 401) {
        alert('you are not logged in !');
        this.router.navigate(['login']);
      } else {
        alert(err.message);
      }
    });
  }
     public createFlagC() {
       if (this.updateFlag === true || this.removeFlag === true ) {
         this.updateFlag = false;
         if (this.removeFlag === true) {
         this.removeFlag = false;
         }
         this.createFlag = true;
       } else {
       this.createFlag = true;
      }
     }

     public createVolunteer() {

        this.adminService.createVolunteer(this.volunteerCreate).subscribe( volunteer => {
          this.volunteerCreate = volunteer;
          console.log(volunteer);
        }, err => { if (err.status === 401) {
          alert('you are not logged in !');
          this.router.navigate(['login']);
        } else {
          alert(err.message);
        }
      });
    }
  }




