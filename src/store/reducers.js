import {
    ACTION_CHANGE_TABLE_DATA,
    ACTION_CHANGE_SORT_DIRECTION,
    ACTION_CHANGE_SORT_FIELD,
    ACTION_CHANGE_STATE_CHEKED_ACTIVE
} from './../index';

export const rootReducer = (state, action) => {
    switch(action.type) {
        case ACTION_CHANGE_TABLE_DATA:
            return {
                ...state, 
                tableData: action.payload
            };
        case ACTION_CHANGE_SORT_DIRECTION:
            return {
                ...state, 
                sortDirection: action.payload
            };
        
        case ACTION_CHANGE_SORT_FIELD:
            return {
                ...state, 
                sortField: action.payload
            };
        case ACTION_CHANGE_STATE_CHEKED_ACTIVE:
            return {
                ...state, 
                checkedActive: action.payload
            };
        default:
            return state;
    }
}
