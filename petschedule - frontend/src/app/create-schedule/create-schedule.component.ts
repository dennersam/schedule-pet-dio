import { ScheduleService } from './../schedule.service';
import { Component, OnInit } from '@angular/core';
import { PetSchedule } from '../model/PetSchedule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {
  schedule: PetSchedule = new PetSchedule();
  submitted= false;

  constructor(private scheduleService: ScheduleService,
              private router: Router) { }

  ngOnInit() {
  }

  newSchedule(): void{
    this.submitted = false;
    this.schedule = new PetSchedule;
  }

  save(){
    this.scheduleService.createSchedule(this.schedule)
    .subscribe(data => console.log(data),
    error=>console.log(error));
    this.schedule=new PetSchedule();
    this.goToList();

  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  goToList(){
    this.router.navigate(['list']);
  }

}
