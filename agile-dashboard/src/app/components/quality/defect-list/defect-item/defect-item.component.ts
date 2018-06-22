import { Component, OnInit, Input } from '@angular/core';
import { Defect } from '../../defect.model';

@Component({
  selector: 'defect-item',
  templateUrl: './defect-item.component.html',
  styleUrls: ['./defect-item.component.css']
})
export class DefectItemComponent implements OnInit {
  @Input() defect: Defect;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
