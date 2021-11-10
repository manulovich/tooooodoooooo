import React from 'react';
import deleteIcon from './icons/delete.png';
import './task.css';

class Task extends React.Component {
    render() {
        const {
            value,
            done,
            important,
            onToggleDone,
            onDeleted,
            onToggleImportant
        } = this.props;

        let taskClassName =  'task';
        if (important) taskClassName += ' task--important'
        if (done) taskClassName += ' task--done'

        return (
            <div className={ taskClassName }>
                <span onClick={ onToggleDone }>{ value }</span>

                <div className='task__item-action item-action'>
                    <button
                        data-message='удалить задачу'
                        className='item-action__act'
                        data-type='delete'
                        onClick={ onDeleted }
                    >
                        <img src={ deleteIcon } alt='удалить задачу' />
                    </button>
                    <button
                        data-message='отметить важным'
                        className='item-action__act'
                        data-type='important'
                        onClick={ onToggleImportant }
                    >
                        !
                    </button>
                </div>
            </div>
        );
    }
}

export default Task;
