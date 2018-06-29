import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { DefectService } from '../defect.service';
import { Defect } from '../defect.model';
import * as DefectActions from '../store/defect.actions';

@Component({
  selector: 'defect',
  templateUrl: './defect.component.html',
  styleUrls: ['./defect.component.css']
})
export class DefectComponent implements OnInit {
  defectForm: FormGroup;

  constructor(private defectDataStorageService: DefectService, 
              private store: Store<{defect: {defects: Defect}}>,
              private router: Router) { }

  onCreateDefect() {
    // console.log('Defect Created!', this.defectForm.value);
    // this.defectDataStorageService.createDefect(this.defectForm.value);
    this.store.dispatch(new DefectActions.CreateDefect(this.defectForm.value));
    this.router.navigate(['/defect-list']);
  }

  private initForm() {
      let defectID: '';
      let defectDescription: '';
      let defectState: '';
      let defectProject: '';
      let defectAssignee: '';
      
      this.defectForm = new FormGroup({
        'id': new FormControl(defectID, Validators.required),
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
