import React from 'react';
import './SearchBox.css';


const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2 search-container">
            <input 
                className="pa3 search-border ba bg-lightest-blue tc"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;