import React from 'react';
import Task from './task/task';
import './list-task.css';

const ListTask = ({ tasks, onDeleted }) => {
    return (
        <section className='list-task' data-message='список задач'>
            <ul>
                {
                    tasks.map(task => {
                        const { id, ...rest } = task;

                        return (
                            <li className='list-task__item' key={ id }>
                                <Task { ...rest } onDeleted={() => onDeleted(id)} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default ListTask;
