import React from 'react';
import Header from '../header';
import ViewCtrl from '../view-ctrl'
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
                <ViewCtrl placeholder='tap to search' />
                <ListTask tasks={ tasks } onDeleted={ this.onDeleted } />
            </div>
        );
    }
}

export default App;
