import { Component, OnInit } from '@angular/core';
import { DefectService } from '../defect.service';
import { Defect } from '../defect.model';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.css'],
})
export class DefectListComponent implements OnInit {
  defects = new MatTableDataSource(this.defectService.getDefects());
  displayedColumns = ['name', 'description', 'state', 'project', 'assignee'];
  panelOpenState = false;
  constructor(private defectService: DefectService) { }

  onRowClicked(row) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.defects.filter = filterValue;
  }

  ngOnInit() {
    // this.defects = this.defectService.getDefects();
    // console.log(this.defectService.getDefects());
  }

}
