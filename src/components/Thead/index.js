import React from 'react';
import './index.css';
import SortPointer from '../SortPointer';

const Thead = ({ cb, sortField, sortDirection }) => {
  
  return (
    <thead className="thead-dark text-center">
      <tr>

        <th id="rank" onClick={cb} >
          <span>#</span>
          {(sortField === 'rank') ?
           <SortPointer sortDirection={sortDirection} type = "number"/> :
           <SortPointer sortDirection="sort" type = "default"/>}
        </th>
    
        <th id="firstName" onClick={cb} >
          <span>First Name</span>
          {(sortField === 'firstName') ?
           <SortPointer sortDirection={sortDirection} type = "letter"/> :
           <SortPointer sortDirection="sort" type = "default"/>}
        </th>

        <th id="lastName" onClick={cb}>
          <span>Last Name</span>
          {(sortField === 'lastName') ?
           <SortPointer sortDirection={sortDirection} type = "letter"/> :
           <SortPointer sortDirection="sort" type = "default"/>}
        </th>

        <th id='id' onClick={cb}>
          <span>Id</span>
          {(sortField === 'id') ?
           <SortPointer sortDirection={sortDirection} type = "number"/> :
           <SortPointer sortDirection="sort" type = "default"/>}
        </th>

        <th id='profession' onClick={cb}>
          <span>Profession</span>
          {(sortField === 'profession') ?
           <SortPointer sortDirection={sortDirection} type = "letter"/> :
           <SortPointer sortDirection="sort" type = "default"/>}
        </th>

        <th id='location' onClick={cb}>
          <span>Location</span>
          {(sortField === 'location') ?
          <SortPointer sortDirection={sortDirection} type = "letter"/> :
          <SortPointer sortDirection="sort" type = "default"/>}
        </th>

        <th>Is active</th>

        <th id='mail' onClick={cb}>
          <span>E-mail</span>
          {(sortField === 'mail') ?
           <SortPointer sortDirection={sortDirection} type = "letter"/> :
           <SortPointer sortDirection="sort" type = "default"/>}
        </th>
        </tr>
    </thead>
  )
}
export default Thead;