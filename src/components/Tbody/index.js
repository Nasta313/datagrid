import React from 'react';
import Marker from './../Marker';

const Tbody = ({data}) => {
    return (
      <tbody>
        {data.map((el, index) =>
            <tr key={index}>
                <td>{el.rank}</td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.id}</td>
                <td>{el.profession}</td>
                <td>{el.city}</td>
                <td>
                  {(el.isActive)?<Marker color='#11ca0e'/>:<Marker color='#e83e8c'/>}
                </td>
                <td>{el.mail}</td>
            </tr>
        )}
      </tbody>
    )
}

export default Tbody;