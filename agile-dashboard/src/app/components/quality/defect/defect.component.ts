import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DefectService } from '../defect.service';

@Component({
  selector: 'defect',
  templateUrl: './defect.component.html',
  styleUrls: ['./defect.component.css']
})
export class DefectComponent implements OnInit {
  defectForm: FormGroup;

  constructor(private defectDataStorageService: DefectService) { }

  onCreateDefect() {
    // console.log('Defect Created!', this.defectForm.value);
    this.defectDataStorageService.createDefect(this.defectForm.value);
  }

  private initForm() {
      let defectName: '';
      let defectDescription: '';
      let defectState: '';
      let defectProject: '';
      let defectAssignee: '';
      
      this.defectForm = new FormGroup({
        'name': new FormControl(defectName, Validators.required),
        'description': new FormControl(defectDescription, Validators.required),
        'state': new FormControl(defectState, Validators.required),
        'project': new FormControl(defectProject, Validators.required),
        'assignee': new FormControl(defectAssignee, Validators.required)
      });
  }
  ngOnInit() {
    this.initForm();
  }

}
