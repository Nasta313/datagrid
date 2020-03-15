import React from 'react';

const Marker = ({ color }) => {
    const style = {
        border: `1px solid ${color}`,
        
        borderRadius: "50%",
        height: "15px",
        width: "15px",
    };
    return (
        <div className="d-flex justify-content-center">
            <div style={style}></div>
        </div>
    )
}
export default Marker;