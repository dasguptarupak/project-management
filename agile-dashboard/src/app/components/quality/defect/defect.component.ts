import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'defect',
  templateUrl: './defect.component.html',
  styleUrls: ['./defect.component.css']
})
export class DefectComponent implements OnInit {

  defectData = {
    name: '',
    description: '',
    state: '',
    project: '',
    assignee: ''
  };

  constructor() { }

  onCreateDefect(form: NgForm) {
    this.defectData.name = form.value.name;
    this.defectData.description = form.value.description;
    this.defectData.state = form.value.state;
    this.defectData.project = form.value.project;
    this.defectData.assignee = form.value.assignee;
    
    console.log('Defect Created!', this.defectData);

  }

  ngOnInit() {}

}
