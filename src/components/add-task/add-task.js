import React from 'react';
import './add-task.css';

const AddTask = ({ placeholder }) => {
    return (
        <div className='add-task'>
            <input type='text' placeholder={ placeholder } />
        </div>
    );
};

export default AddTask;
