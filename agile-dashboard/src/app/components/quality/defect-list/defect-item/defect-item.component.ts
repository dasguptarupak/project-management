import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { Defect } from '../../defect.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'defect-item',
  templateUrl: './defect-item.component.html',
  styleUrls: ['./defect-item.component.css']
})
export class DefectItemComponent implements OnInit {
  @Input() defect: Defect;
  @Input() index: number;

  constructor() { }

  ngOnInit() { console.log(this.defect); }

}
