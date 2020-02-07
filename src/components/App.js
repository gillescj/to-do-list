import '../styles/App.scss';

import React from 'react';
import AddTaskBar from './AddTaskBar';
import TaskList from './TaskList';

class App extends React.Component {
    state = { tasks: [] };

    onAddTaskButtonClick = taskTerm => {
        if (!taskTerm) return;
        if (this.state.tasks.find(el => el === taskTerm)) return;
        this.setState({ tasks: [...this.state.tasks, taskTerm] });
    };

    onTaskItemClick = task => {
        const newTasks = this.state.tasks.filter(el => el !== task);

        this.setState({ tasks: newTasks });
    };

    render() {
        return (
            <div className="container">
                <AddTaskBar onAddTaskButtonClick={this.onAddTaskButtonClick} />
                <TaskList
                    tasks={this.state.tasks}
                    onTaskItemClick={this.onTaskItemClick}
                />
            </div>
        );
    }
}

export default App;
