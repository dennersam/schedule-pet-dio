import { ScheduleService } from './../schedule.service';
import { PetSchedule } from './../model/PetSchedule';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {

  id: number;
  schedule: PetSchedule;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private scheduleService: ScheduleService) { }

  ngOnInit(){
    this.schedule = new PetSchedule();
    this.id=this.route.snapshot.params['id'];

    this.scheduleService.getSchedule(this.id)
    .subscribe(data=>{
      console.log(data)
      this.schedule=data;
    }, error => console.log(error));
  }

  list(){
    this.router.navigate(['list']);
  }

}
