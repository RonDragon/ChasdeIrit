import { Component, OnInit } from '@angular/core';
import { Volunteer } from 'src/app/models/beans/volunteer/volunteer';
import { Family } from 'src/app/models/beans/family/family';
import { Router } from '@angular/router/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-link-family-volunteer',
  templateUrl: './link-family-volunteer.component.html',
  styleUrls: ['./link-family-volunteer.component.scss'],
})
export class LinkFamilyVolunteerComponent implements OnInit {
   familys: Family[];
   family: Family = new Family();
   volunteer: Volunteer = new Volunteer();
   volunteerId: number;
   volunteers: Volunteer[];
   flag = false;
   serverFlag = false;
   removeFlag = false;
   updateFlag = false;
   createFlag = false;
   router: Router;
   selected;
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

  public updateFlagC(volunteerId: number) {
    this.volunteerId = volunteerId;
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
    console.log(this.selected);
    this.adminService.setFamilyToVolunteer(this.selected , this.volunteerId).subscribe(flag => {
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

onSelect(event){
  this.selected = event.value.familyId;
}

}
