import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from './../schedule.service';
import { PetSchedule } from './../model/PetSchedule';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css']
})
export class UpdateScheduleComponent implements OnInit {

  id: number = 0;
  schedule: PetSchedule;
  submitted = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private scheduleService: ScheduleService ) { }

  ngOnInit() {
    this.schedule = new PetSchedule;

    this.id = this.route.snapshot.params['id'];

    this.scheduleService.getSchedule(this.id)
    .subscribe(data => {
      console.log(data);
      this.schedule = data;
    },
    error => console.log(error));
  }

  updateSchedule(){
    this.scheduleService.updateSchedule(this.id, this.schedule)
    .subscribe(data => console.log(data), error => console.log(error));
    this.schedule = new PetSchedule;
    this.goToList();
  }

  onSubmit(){
    this.updateSchedule();
  }

  goToList(){
    this.router.navigate(['/list']);
  }
}
