import React from 'react';
import Header from '../header';
import ViewCtrl from '../view-ctrl'
import ListTask from '../list-task';
import AddTask from '../add-task';
import './app.css';

class App extends React.Component {
    id = 100;

    /* -- utils -- */
    toggleObjProperty = (array, id, prop) => {
        const idx = array.findIndex(task => task.id === id);
        const oldItem = array[idx];
        const newItem = { ...oldItem, [prop]: !oldItem[prop] };

        return [
            ...array.slice(0, idx),
            newItem,
            ...array.slice(idx + 1)
        ]

    }

    createTask = (value) => {
        return {
            value,
            important: false,
            done: false,
            id: this.id++
        };
    }

    search(tasks, term) {
        return tasks.filter(task => {
            return task.value.toUpperCase()
                .includes(term.toUpperCase())
        });
    }

    filter(tasks, params) {
        switch (params) {
            case 'active':
                return tasks.filter(task => !task.done);
            case 'done':
                return tasks.filter(task => task.done);
            case 'all':
                return tasks;
            default:
                return tasks;
        }
    }
    /* -- /utils -- */

    /* -- event handler -- */
    onDeleted = (id) => {
        this.setState(({ tasks }) => {
            tasks = tasks.filter((task) => task.id !== id);
            return { tasks };
        });
    }

    addNewTask = (value) => {
        this.setState(({ tasks }) => {
            return {
                tasks: [
                    ...tasks,
                    this.createTask(value),
                ]
            };
        });
    }

    onToggleDone = (id) => {
        this.setState(({ tasks }) => {
            return {
                tasks: this.toggleObjProperty(tasks, id, 'done')
            }
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ tasks }) => {
            return {
                tasks: this.toggleObjProperty(tasks, id, 'important')
            }
        });
    }

    onToggleFilter = (type) => {
        this.setState({
            filter: type 
        });
    }

    onChangeSearchInput = (text) => {
        this.setState({
            text: text
        });
    }
    /* -- /event handler -- */

    /* -- state -- */
    state = {
        tasks: [
            this.createTask('Drink Coffee'),
            this.createTask('Build app')
        ],
        filter: 'all',
        text: ''
    }
    /* -- /state -- */

    render() {
        let { tasks, filter, text } = this.state;
        
        tasks = this.search(this.filter(tasks, filter), text);

        return (
            <div className='wrapper'>
                <Header title='Очередная todo-шка' subtitle='на реакте' />
                <ViewCtrl
                    placeholder='tap to search'
                    filter={ filter }
                    onToggleFilter={ this.onToggleFilter }
                    onChangeSearchInput={ this.onChangeSearchInput }
                />
                <ListTask
                    tasks={ tasks }
                    onDeleted={ this.onDeleted }
                    onToggleDone={ this.onToggleDone }
                    onToggleImportant={ this.onToggleImportant }
                />
                <AddTask newTask={ this.addNewTask } />
            </div>
        );
    }
}

export default App;
