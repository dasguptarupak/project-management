import { Action } from '@ngrx/store';
import { Defect } from '../defect.model';

export const CREATE_DEFECT = 'CREATE_DEFECT';

export class CreateDefect implements Action {
    readonly type = CREATE_DEFECT;
    constructor(public payload: Defect) {}
}

export type DefectActions = CreateDefect;