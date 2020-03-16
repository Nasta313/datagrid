import React from 'react';

const Search = ({cb}) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="searchbar form-group">
                    <input
                    type="text"
                    onChange={cb}
                    className="form-control"
                    placeholder="Filter..."
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Search;