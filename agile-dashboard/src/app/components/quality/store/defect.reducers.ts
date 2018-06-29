import * as DefectActions from "./defect.actions";
import { Defect } from '../defect.model';

const initialState = {
    defects: [
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
    ]
};

export function defectReducer (state = initialState, action: DefectActions.DefectActions) {
    switch (action.type) {
        case DefectActions.CREATE_DEFECT : 
            return {
                ...state,
                defects: [...state.defects, action.payload]
            };
        default :
            return state;
    }
}