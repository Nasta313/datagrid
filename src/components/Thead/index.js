import React from 'react';
import './index.css';

const Thead = ({ cb, sortField, sort }) => {
  return (
    <thead className="thead-dark text-center">
      <tr>
        <th onClick={cb.bind(null, 'id')}>Rank</th>

        <th onClick={cb.bind(null, 'firstName')}>
          <span>First Name</span>
          {(sortField === 'firstName') ?
           <span className={`icon-${sort}`}></span> :
           <span className='icon-sort'></span>}
        </th>

        <th onClick={cb.bind(null, 'lastName')}>
          <span>Last Name</span>
          {(sortField === 'lastName') ?
           <span className={`icon-${sort}`}></span> :
           <span className='icon-sort'></span>}
        </th>

        <th onClick={cb.bind(null, 'id')}>Id</th>
        <th onClick={cb.bind(null, 'profession')}>Profession</th>
        <th onClick={cb.bind(null, 'city')}>City</th>
        <th>Is active</th>
        <th onClick={cb.bind(null, 'phone')}>Phone</th>
      </tr>
    </thead>
  )
}
export default Thead;