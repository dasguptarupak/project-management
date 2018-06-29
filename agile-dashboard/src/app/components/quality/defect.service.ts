import { Injectable } from '@angular/core';
import { Defect } from './defect.model';
import { Subject } from 'rxjs';

@Injectable()
export class DefectService {
    defectsChanged = new Subject<Defect[]>();

    private defects: Defect[] = [
        new Defect(
            'DE10000',
            'Loading Issue',
            'Submitted',
            'Team X',
            'Rupak Dasgupta'
        ),
        new Defect(
            'DE10001',
            'Loading Issue 2',
            'Submitted',
            'Team X',
            'Sandeep Yadav'
        )
    ];
    constructor() {}

    getDefect(index: number) {
        return this.defects[index];
    }

    createDefect(defect: Defect) {
        this.defects.push(defect);
        this.defectsChanged.next(this.defects.slice());
    }
}