import React from 'react';
import Header from '../header';
import AddTask from '../add-task';
import Filter from '../filter';
import ListTask from '../list-task';
import './app.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: [
                { value: 'Drink Coffee', important: true, id: 12212 },
                { value: 'Build app', important: false, id: 1222 },
            ]
        };

        this.onDeleted = (id) => {
            this.setState(({ tasks }) => {
                tasks = tasks.filter((task) => task.id !== id);
                return { tasks };
            })
        };
    }

    render() {
        const { tasks } = this.state;

        return (
            <div className='wrapper'>
                <Header title='Очередная todo-шка' subtitle='на реакте' />
                <div className='ctrl app__ctrl'>
                    <div className='ctrl__add-task'>
                        <AddTask placeholder='tap to input task' />
                    </div>
                    <div className='ctrl__filter-task'>
                        <Filter />
                    </div>
                </div>
                <ListTask tasks={ tasks } onDeleted={ this.onDeleted } />
            </div>
        );
    }
}

export default App;
