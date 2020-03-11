import React from 'react';

const Search = ({onKeyUp}) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="searchbar form-group">
                    <input
                    type="text"
                    onKeyUp={onKeyUp}
                    className="form-control"
                    placeholder="Search people by name..."
                    />
                </div>
            </div>
        </div>
    )
}

export default Search;