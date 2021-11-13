import React from 'react';
import Filter from './filter';
import Search from './search';
import './view-ctrl.css';

const ViewCtrl = ({ placeholder, filter, onToggleFilter, onChangeSearchInput }) => {

    return (
        <div className='view-ctrl'>
            <Search placeholder={ placeholder } onChangeSearchInput={ onChangeSearchInput } />
            <Filter filter={ filter } onToggleFilter={ onToggleFilter } />
        </div>
    );
};

export default ViewCtrl;
