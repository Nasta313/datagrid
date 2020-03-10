import React from 'react';
import Thead from './components/Thead';
import Tbody from './components/Tbody';
import { data } from './data/defaultData';
import _ from 'lodash';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: data,
      sort: 'asc',  // 'desc'
      sortField: 'id', // поле по умолчанию
    }
  }

  

  render() {
    return (
      <div className="container">
        <h1 className="text-center h1 m-5">Datagrid</h1>
        <table className="table table-bordered table-sm table-sm-responsive">
          <Thead 
            cb={this.onSort}
          />
          <Tbody data={this.state.data}/>
        </table>
      </div>
    );
  }
}