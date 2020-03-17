import React from 'react';

const ToggleEl = ({checkedActive, onChange}) => {
    return (
        <div className="custom-control custom-switch pt-2 pb-2">
            <input 
                type="checkbox"
                className="custom-control-input"
                id="isActiveSwitch"
                defaultChecked={checkedActive}
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