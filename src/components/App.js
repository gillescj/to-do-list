import '../styles/App.scss';

import React from 'react';
import AddTaskBar from './AddTaskBar';
import TaskList from './TaskList';

class App extends React.Component {
    state = { tasks: [] };

    onAddTaskButtonClick = taskTerm => {
        if (!taskTerm) return;
        if (this.state.tasks.find(el => el.name === taskTerm)) return;
        this.setState({
            tasks: [{ name: taskTerm, complete: false }, ...this.state.tasks]
        });
    };

    onDeleteItemClick = task => {
        const newTasks = this.state.tasks.filter(el => el.name !== task);

        this.setState({ tasks: newTasks });
    };

    onTaskItemClick = taskName => {
        const newTasks = [...this.state.tasks];
        const taskIndex = newTasks.findIndex(task => task.name === taskName);
        newTasks[taskIndex].complete = !newTasks[taskIndex].complete;
        this.setState({ tasks: newTasks });
    };

    render() {
        return (
            <div className="container">
                <AddTaskBar onAddTaskButtonClick={this.onAddTaskButtonClick} />
                <TaskList
                    tasks={this.state.tasks}
                    onDeleteItemClick={this.onDeleteItemClick}
                    onTaskItemClick={this.onTaskItemClick}
                />
            </div>
        );
    }
}

export default App;
