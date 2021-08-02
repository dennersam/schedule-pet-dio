import { UpdateScheduleComponent } from './../update-schedule/update-schedule.component';
import { ScheduleService } from './../schedule.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PetSchedule } from '../model/PetSchedule';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  schedules: Observable<PetSchedule[]>;

  constructor( private scheduleService: ScheduleService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.schedules=this.scheduleService.getScheduleList();
  }

  deleteSchedule(id: number){
    this.scheduleService.deleteSchedule(id)
    .subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  scheduleDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateSchedule(id: number){
    this.router.navigate(['update', id]);
  }

}
