import React from 'react';
import './search.css';

const Search = ({ placeholder, onChangeSearchInput }) => {
    return (
        <div className='search view-ctrl__search'>
            <input
                type='text'
                placeholder={ placeholder }
                onChange={ (e) => onChangeSearchInput(e.target.value) }
            />
        </div>
    );
};

export default Search;
