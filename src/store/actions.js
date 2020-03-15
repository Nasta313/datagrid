import {
    ACTION_CHANGE_TABLE_DATA,
    ACTION_CHANGE_SORT_DIRECTION,
    ACTION_CHANGE_SORT_FIELD,
    ACTION_CHANGE_STATE_CHEKED_ACTIVE
} from './../index';


export const changeTableData = (table) => {
    return {
        type: ACTION_CHANGE_TABLE_DATA,
        payload: table
    }
}
export const changeSortDirection = (value) => {
    return {
        type: ACTION_CHANGE_SORT_DIRECTION,
        payload: value
    }
}
export const changeSortField = (value) => {
    return {
        type: ACTION_CHANGE_SORT_FIELD,
        payload: value
    }
}
export const changeStateCheckedActive = (value) => {
    return {
        type: ACTION_CHANGE_STATE_CHEKED_ACTIVE,
        payload: value
    }
}
