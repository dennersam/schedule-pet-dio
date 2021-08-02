import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';

import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateScheduleComponent,
    ScheduleDetailsComponent,
    ScheduleListComponent,
    UpdateScheduleComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
