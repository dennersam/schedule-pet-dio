import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private baseUrl = 'http://localhost:8081/api/v1/petschedule';

  constructor(private http: HttpClient) { }

  getSchedule(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSchedule(schedule: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, schedule);
  }

  updateSchedule(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSchedule(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getScheduleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
