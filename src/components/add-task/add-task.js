import React from 'react';
import './add-task.css';

class AddTask extends React.Component {
    state = {
        inputValue: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.newTask(this.state.inputValue);

        this.clearInputValue();
    };

    clearInputValue = () => {
        this.setState({
            inputValue: ''
        });
    };

    onInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

    render() {
        return (
            <form className='add-new-task' onSubmit={ this.onSubmit }>
                <input
                    type='text'
                    id='new-task'
                    placeholder='new task'
                    onChange={this.onInputChange}
                    value={this.state.inputValue}
                />
                <button type='submit'>Добавить задачу</button>
            </form>
        );    
    }
}

export default AddTask;
