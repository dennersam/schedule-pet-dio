import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ScheduleListComponent },
  { path: 'create', component: CreateScheduleComponent },
  { path: 'update/:id', component: UpdateScheduleComponent },
  { path: 'details/:id', component: ScheduleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
