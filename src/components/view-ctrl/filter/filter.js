import React from 'react';
import './filter.css';

const Filter = ({ filter, onToggleFilter }) => {
    const buttons = [
        { msg: 'показать все задачи', type: 'all', label: 'all' },
        { msg: 'показать активные задачи', type: 'active', label: 'active' },
        { msg: 'показать завершенные задачи', type: 'done', label: 'done' },
    ];

    const htmlButtons = buttons.map(({ msg, type, label }) => {
        const className =
            `filter__item${filter === type ? ' filter__item--active' : ''}`;

        return (
            <button
                data-message={ msg }
                className={ className }
                data-type={ type }
                key={ type }
                onClick={ () => onToggleFilter(type) }
            >
                {label}
            </button>
        )
    })

    return (
        <div className='filter view-ctrl__filter'>
            { htmlButtons }
        </div>
    );
}

export default Filter;
