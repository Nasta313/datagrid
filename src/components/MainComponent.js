import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { 
    changeSortField,
    changeSortDirection,
    changeTableData,
    changeStateCheckedActive,
    changeSelectedOptions
    } from '../store/actions';
import Thead from '../components/Thead';
import Tbody from '../components/Tbody';
import Search from '../components/Search';
import ToggleEl from '../components/ToggleEl';
import { tableData } from '../data/defaultData';
import Select from 'react-select';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

export class App extends React.Component {
    
    onSelectOption = (selectedOption) => {
        const { changeSelectedOptions, changeTableData, tableData } = this.props;
        changeSelectedOptions(selectedOption);
        const cloneData = tableData.concat();
        console.log(selectedOption);
        const selected = (selectedOption)?(selectedOption.value):"";
        const filterData = _.filter(cloneData, item => {
            return item.enum.includes(selected);
        });
        changeTableData(filterData);
    };

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
        const { changeTableData, tableData} = this.props;
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
    onReset = () => {
        const { changeTableData} = this.props;
        console.log("ddd")
        changeTableData(tableData);
    }

    render(){
        const {tableData, sortDirection, sortField, checkedActive, selectedOption } = this.props;
        return (
            <div className="pt-5">               
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <p className="text-muted">Filter for firstname, secondname and location...</p>
                            <Search cb={(e)=>{this.onFilter(e)}}/>
                        </div>
                        <div className="col">
                            <p className="text-muted">Filter for enum colomn..</p>
                            <Select
                                defaultValue={[options[0], options[1], options[2]]}
                                name="enum"
                                options={options}
                                className="basic-multi-select pb-3"
                                classNamePrefix="select"
                                value={selectedOption}
                                onChange={this.onSelectOption}
                            />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-2">
                            <ToggleEl 
                                onChange={this.onActive} 
                                checkedActive={checkedActive}
                            />
                        </div>
                        <div className="col-2">
                            <button 
                                type="button"
                                className="btn btn-primary"
                                onClick={(e)=>{
                                    e.preventDefault();
                                    this.onReset();
                                }}
                            >Reset
                            </button>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-2 text-muted">
                            {tableData.length} of 1000
                        </div>
                    </div>
                    <table className="table table-bordered">
                        <Thead 
                            cb={({target})=>{this.onSort(target.closest('th').id)}}
                            sortDirection={sortDirection} 
                            sortField={sortField}
                            selectedOption = {selectedOption}
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
        checkedActive: state.checkedActive,
        selectedOption: state.selectedOption
    }
}
const putActionsToProps = (dispatch) => {
    return {
        changeTableData:  bindActionCreators(changeTableData, dispatch),
        changeSortField:  bindActionCreators(changeSortField, dispatch),
        changeSortDirection:  bindActionCreators(changeSortDirection, dispatch),
        changeStateCheckedActive: bindActionCreators(changeStateCheckedActive, dispatch),
        changeSelectedOptions: bindActionCreators(changeSelectedOptions, dispatch),
    }
}

export default connect(putStateToProps, putActionsToProps)(App); 
