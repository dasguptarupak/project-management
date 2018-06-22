import { Component, OnInit } from '@angular/core';
import { DefectService } from '../defect.service';
import { Defect } from '../defect.model';

@Component({
  selector: 'defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.css'],
})
export class DefectListComponent implements OnInit {
  defects: Defect[];

  constructor(private defectService: DefectService) { }

  ngOnInit() {
    this.defects = this.defectService.getDefects();
    // console.log(this.defectService.getDefects());
  }

}
