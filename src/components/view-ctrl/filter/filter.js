import React from 'react';
import './filter.css';

const Filter = () => {
    return (
        <div className='filter view-ctrl__filter'>
            <button
                data-message='показать все задачи'
                className='filter__item filter__item--active'
                data-type='all'
            >
                all
            </button>
            <button
                data-message='показать активные задачи'
                className='filter__item'
                data-type='active'
            >
                active
            </button>
            <button
                data-message='показать завершенные задачи'
                className='filter__item'
                data-type='done'
            >
                done
            </button>
        </div>
    );
}

export default Filter;
