import React from 'react';

const Thead = ({ cb }) => {
  return (
    <thead>
      <tr>
        <th onClick={cb.bind(null, 'id')}>Rank</th>
        <th onClick={cb.bind(null, 'firstName')}>First Name</th>
        <th onClick={cb.bind(null, 'lastName')}>Last Name</th>
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