import React from 'react';
import Filter from './filter';
import Search from './search';
import './view-ctrl.css';

const ViewCtrl = ({ placeholder }) => {
    return (
        <div className='view-ctrl'>
            <Search placeholder={ placeholder } />
            <Filter />
        </div>
    );
};

export default ViewCtrl;
