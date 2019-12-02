import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { Tab3Component } from './components/tab3/tab3.component';
import { VolunteerComponentComponent } from './components/volunteer-component/volunteer-component.component';
import { AdminComponent } from './components/admin-component/admin-component.component';
import { VolunteerManageComponent } from './components/volunteer-manage/volunteer-manage.component';
import { FamilyManageComponent } from './components/family-manage/family-manage.component';
import { LinkFamilyVolunteerComponent } from './components/link-family-volunteer/link-family-volunteer.component';
import { DeliveryStatusViewComponent } from './components/delivery-status-view/delivery-status-view.component';


const routes: Routes = [
  { path: '*', component: Tab1Component },
  { path: '', component: Tab1Component },
  { path: ' ', component: Tab1Component },
  { path: 'tab1', component: Tab1Component },
  { path: 'tab2', component: Tab2Component },
  { path: 'tab3', component: Tab3Component },
  {path: 'volunteer-component' , component: VolunteerComponentComponent},
  {path: 'admin-component' , component: AdminComponent , children: [
    {path: 'volunteerManage' , component: VolunteerManageComponent},
    {path: 'familyManage' , component: FamilyManageComponent},
    {path: 'linkFamilyToVolunteer' , component: LinkFamilyVolunteerComponent},
    {path: 'deliveryStatusView' , component: DeliveryStatusViewComponent},
  ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
