import React from 'react';
import Thead from './components/Thead';
import Tbody from './components/Tbody';
import { data } from './data/defaultData';
import _ from 'lodash';
import Search from './components/Search';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: data,
      sort: 'sort',  // 'asc/desc'
      sortField: 'id', // поле по умолчанию
    }
  }

  onSort = sortField => {
    const cloneData = this.state.data.concat();
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
    const orderedData = _.orderBy(cloneData, sortField, sortType);

    this.setState({
      data: orderedData,
      sort: sortType,
      sortField
    })
  }

  onKeyUp = ({target}) => {
    const cloneData = data;
    const filterData = _.filter(cloneData, item => {
      return (
        item.firstName.toLowerCase().includes(target.value.toLowerCase())||
        item.lastName.toLowerCase().includes(target.value.toLowerCase())||
        item.city.toLowerCase().includes(target.value.toLowerCase())
        )
    });
    this.setState({
      data: filterData,
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center h1 m-5">Datagrid</h1>
        <Search onKeyUp={this.onKeyUp}/>
        <table className="table table-bordered">
          <Thead 
            cb={this.onSort}
            sort={this.state.sort}
            sortField={this.state.sortField}
          />
          <Tbody data={this.state.data}/>
        </table>
      </div>
    );
  }
}