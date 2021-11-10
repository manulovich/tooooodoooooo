import React from 'react';
import './add-task.css';

const AddTask = ({ newTask }) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newTaskInput = document.getElementById('new-task');
        newTask(newTaskInput.value);
        newTaskInput.value = ''; // clear input
    };

    return (
        <form className='add-new-task' onSubmit={ onSubmitHandler }>
            <input type='text' id='new-task' placeholder='new task' />
            <button type='submit'>Добавить задачу</button>
        </form>
    );
};

export default AddTask;
