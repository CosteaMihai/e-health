import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPatient } from '../interfaces/patients';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  patients: IPatient[];
  selectedPatient: IPatient;

  constructor(private http: HttpClient, private globalService: GlobalService) {}

  getPatientsList(): Observable<any> {
    return this.http.get(environment.baseURL).pipe(
      map((response: any) => {
        this.patients = this.globalService.keysToCamel(response);
        console.log(this.patients);
      })
    );
  }

  selectPatient(payload: IPatient): void {
    this.selectedPatient = payload;
  }
}
