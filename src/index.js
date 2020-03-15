import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import MainComponent from './components/MainComponent';
import { rootReducer } from './store/reducers';
import { tableData } from './data/defaultData';


export const ACTION_CHANGE_TABLE_DATA= 'ACTION_CHANGE_TABLE_DATA';
export const ACTION_CHANGE_SORT_DIRECTION = 'ACTION_CHANGE_SORT_DIRECTION';
export const ACTION_CHANGE_SORT_FIELD = 'ACTION_CHANGE_SORT_FIELD';
export const ACTION_CHANGE_STATE_CHEKED_ACTIVE= 'ACTION_CHANGE_STATE_CHEKED_ACTIVE';


const initialState = { 
    tableData: tableData,
    sortDirection: 'sort',
    sortField: null,
    checkedActive: null
}

export const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(<Provider store={store}>
        <MainComponent /> 
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
