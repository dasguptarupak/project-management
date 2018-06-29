import { Component, OnInit } from '@angular/core';
import { DefectService } from '../defect.service';
import { Defect } from '../defect.model';
import {MatTableDataSource} from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.css'],
})
export class DefectListComponent implements OnInit {
  defects: Observable<{defects: Defect[]}>;
  displayedColumns = ['id', 'description', 'state', 'project', 'assignee'];
  panelOpenState = false;

  constructor(private defectService: DefectService, private store: Store<{defect: {defects: Defect[]}}>) { }

  onRowClicked(row) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // this.defects.filter = filterValue;
  }

  ngOnInit() {
    this.defects = this.store.select('defect');
  }

}
