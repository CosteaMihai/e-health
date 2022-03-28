import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { IPatient } from '../interfaces/patients';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  tableColumns = ['id', 'firstName', 'lastName', 'button'];

  constructor(
    public patientsService: PatientsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.patientsService.getPatientsList().subscribe();
  }

  openModal(patient: IPatient): void {
    console.log(patient);
    this.patientsService.selectPatient(patient);
    this.dialog.open(ModalComponent);
  }
}
