import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { IPatient } from '../interfaces/patients';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnChanges {
  selectedPatient: IPatient;

  constructor(public patientsService: PatientsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedPatient = this.patientsService.selectedPatient;
  }
}
