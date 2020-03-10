import React from 'react';

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
                <td>{(el.isActive)?"+":"-"}</td>
                <td>{el.phone}</td>
            </tr>
        )}
      </tbody>
    )
}

export default Tbody;