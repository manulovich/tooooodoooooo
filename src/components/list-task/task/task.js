import React from 'react';
import deleteIcon from './icons/delete.png';
import './task.css';

class Task extends React.Component {

    constructor() {
        super();
        this.state = {
            done: false,
            important: false
        };

        this.onLabelClick = () => {
            this.setState(({ done }) => {
                return {
                    done: !done
                }
            });
        };

        this.onImportant = () => {
            this.setState(({ important }) => {
                return {
                    important: !important
                }
            });
        };
    }

    render() {
        const { value, onDeleted } = this.props;
        const { done, important } = this.state;

        let taskClassName =  'task';
        if (important) taskClassName += ' task--important'
        if (done) taskClassName += ' task--done'

        return (
            <div className={ taskClassName }>
                <span onClick={ this.onLabelClick }>{ value }</span>

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
                        onClick={ this.onImportant }
                    >
                        !
                    </button>
                </div>
            </div>
        );
    }
}

export default Task;
