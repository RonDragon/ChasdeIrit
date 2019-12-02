import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent} from './components/admin-component/admin-component.component';
import { DeliveryStatusViewComponent} from './components/delivery-status-view/delivery-status-view.component';
import {FamilyManageComponent } from './components/family-manage/family-manage.component';
import { LinkFamilyVolunteerComponent} from './components/link-family-volunteer/link-family-volunteer.component';
import {Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component} from './components/tab2/tab2.component';
import {Tab3Component } from './components/tab3/tab3.component';
import { TabsComponent} from './components/tabs/tabs.component';
import {VolunteerComponentComponent } from './components/volunteer-component/volunteer-component.component';
import { VolunteerManageComponent} from './components/volunteer-manage/volunteer-manage.component';
import { WelcomeComponent} from './components/welcome/welcome.component';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AdminComponent,
    DeliveryStatusViewComponent ,
   FamilyManageComponent  ,
    LinkFamilyVolunteerComponent ,
   Tab1Component ,
    Tab2Component ,
   Tab3Component  ,
    TabsComponent ,
   VolunteerComponentComponent ,
    VolunteerManageComponent ,
    WelcomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
