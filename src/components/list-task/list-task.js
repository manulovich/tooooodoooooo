import React from 'react';
import Task from './task';
import './list-task.css';

const ListTask = ({ tasks, onToggleDone, onDeleted, onToggleImportant }) => {
    return (
        <section className='list-task' data-message='список задач'>
            <ul>
                {
                    tasks.map(task => {
                        const { id, ...rest } = task;

                        return (
                            <li className='list-task__item' key={ id }>
                                <Task { ...rest }
                                    onToggleDone={ () => onToggleDone(id) }
                                    onDeleted={ () => onDeleted(id) }
                                    onToggleImportant={ () => onToggleImportant(id) }
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default ListTask;
