import React from 'react';
import './search.css';

const Search = ({ placeholder }) => {
    return (
        <div className='search view-ctrl__search'>
            <input type='text' placeholder={ placeholder } />
        </div>
    );
};

export default Search;
