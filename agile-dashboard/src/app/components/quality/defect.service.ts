import { Injectable } from '@angular/core';
import { Defect } from './defect.model';

@Injectable()
export class DefectService {
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
    
    getDefects() {
        return this.defects.slice();
    }

    getDefect(index: number) {
        return this.defects[index];
    }
}