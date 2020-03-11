import React from 'react';

const ToggleEl = ({checked, onChange}) => {
    return (
        <div className="custom-control custom-switch mb-3">
            <input type="checkbox"
                className="custom-control-input"
                id="isActiveSwitch"
                checked={checked}
                onChange={onChange}
            />
            <label 
                className="custom-control-label"
                htmlFor="isActiveSwitch"
            >
                Only active
            </label>
        </div>
    )
}

export default ToggleEl;