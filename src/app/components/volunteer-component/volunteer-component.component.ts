import { Component, OnInit } from '@angular/core';
import { VolunteerService } from 'src/app/services/volunteer/volunteer.service';
import { Family } from 'src/app/models/beans/family/family';
import { Router } from '@angular/router/router';


@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer-component.html',
  styleUrls: ['./volunteer-component.scss'],
})
export class VolunteerComponentComponent implements OnInit {
  public router: Router;
  public family: Family = new Family();
  public familys: Family[];
  public flag = false;
  public vNote: string;
  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
    this.volunteerService.getMyFamily().subscribe( familys => {
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
public setDeliveryStatusAndNotes(family) {
  this.family = family;
  this.family.volunteerNote = this.vNote;
  this.volunteerService.setDeliveryStatusAndNotes(this.family).subscribe(flag => {
    this.flag = flag;
    console.log(flag);
  }, err => { if (err.status === 401) {
    alert('you are not logged in !');
    this.router.navigate(['login']);
  } else {
    alert(err.message);
  }
});
}
}
