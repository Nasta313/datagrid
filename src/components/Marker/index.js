import React from 'react';

const Marker = ({ color }) => {
    const style = {
        background: color,
        borderRadius: "50%",
        height: "15px",
        width: "15px",
    };
    return (
        <div style={style}></div>
    )
}
export default Marker;