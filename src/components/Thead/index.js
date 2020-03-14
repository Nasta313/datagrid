import React from 'react';
import './index.css';

const Thead = ({ cb, sortField, sort }) => {
  return (
    <thead className="thead-dark text-center">
      <tr>
        <th onClick={cb.bind(null, 'rank')}>
          <span>#</span>
          {(sortField === 'rank') ?
           <span className={`icon-number-${sort}`}></span> :
           <span className='icon-sort'></span>}
        </th>

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

        <th onClick={cb.bind(null, 'id')}>
          <span>Id</span>
          {(sortField === 'id') ?
           <span className={`icon-number-${sort}`}></span> :
           <span className='icon-sort'></span>}
        </th>

        <th onClick={cb.bind(null, 'profession')}>
          <span>Profession</span>
          {(sortField === 'profession') ?
           <span className={`icon-${sort}`}></span> :
           <span className='icon-sort'></span>}
        </th>

        <th onClick={cb.bind(null, 'city')}>
          <span>Location</span>
          {(sortField === 'city') ?
           <span className={`icon-${sort}`}></span> :
           <span className='icon-sort'></span>}
        </th>

        <th>Is active</th>

        <th onClick={cb.bind(null, 'mail')}>
          <span>E-mail</span>
          {(sortField === 'Mail') ?
           <span className={`icon-${sort}`}></span> :
           <span className='icon-sort'></span>}
        </th>
      </tr>
    </thead>
  )
}
export default Thead;