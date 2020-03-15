import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { changeSortField, changeSortDirection, changeTableData, changeStateCheckedActive} from '../store/actions';
import Thead from '../components/Thead';
import Tbody from '../components/Tbody';
import Search from '../components/Search';
import { tableData } from '../data/defaultData';
import ToggleEl from '../components/ToggleEl';


export class App extends React.Component {

    onSort = (fieldName) => {

        const { changeSortField, changeSortDirection, changeTableData, sortDirection, tableData } = this.props;
        const sortType = sortDirection === 'asc' ? 'desc' : 'asc';
        const cloneData = tableData.concat();
        const orderedData = _.orderBy(cloneData, fieldName, sortType);
        
        changeSortField(fieldName);
        changeTableData(orderedData);
        changeSortDirection(sortType);
    }
    
    onFilter = ({target}) => {
        const { changeTableData} = this.props;
        const cloneData = tableData.concat();
        const filterData = _.filter(cloneData, item => {
          return (
            item.firstName.toLowerCase().includes(target.value.toLowerCase())||
            item.lastName.toLowerCase().includes(target.value.toLowerCase())||
            item.location.toLowerCase().includes(target.value.toLowerCase())
            )
        });
        changeTableData(filterData);
    }

    onActive = () => {
        const { changeTableData, checkedActive, changeStateCheckedActive} = this.props;

        const stateActive = (checkedActive) ? null : true;
        changeStateCheckedActive(stateActive);

        const dataFromProps = this.props.tableData;
        const cloneData = dataFromProps.concat();
        const activeData = _.filter(cloneData, item => item.isActive);
        (stateActive)?changeTableData(activeData):changeTableData(tableData);
    }

    render(){
        const {tableData, sortDirection, sortField, checkedActive } = this.props;
        
        return (
            <div className="pt-5">               
                <div className="container-fluid">
                    <Search cb={(e)=>{this.onFilter(e)}}/>
                    <ToggleEl 
                        onChange={this.onActive} 
                        checkedActive={checkedActive}
                    />
                    <table className="table table-bordered">
                        <Thead 
                            cb={({target})=>{this.onSort(target.closest('th').id)}}
                            sortDirection={sortDirection} 
                            sortField={sortField}
                        />
                        <Tbody data={tableData} />
                    </table>
                </div>
            </div>
        );
    }
    
}

const putStateToProps = (state) => { //Записывает данные из стейта в пропсы App компонента
    return {
        tableData: state.tableData,
        sortDirection: state.sortDirection,
        sortField: state.sortField,
        checkedActive: state.checkedActive
    }
}
const putActionsToProps = (dispatch) => {
    return {
        changeTableData:  bindActionCreators(changeTableData, dispatch),
        changeSortField:  bindActionCreators(changeSortField, dispatch),
        changeSortDirection:  bindActionCreators(changeSortDirection, dispatch),
        changeStateCheckedActive: bindActionCreators(changeStateCheckedActive, dispatch),
    }
}

export default connect(putStateToProps, putActionsToProps)(App); 
