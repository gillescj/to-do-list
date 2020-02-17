import '../styles/App.scss';

import React from 'react';
import AddTaskBar from './AddTaskBar';
import TaskList from './TaskList';

class App extends React.Component {
    state = { tasks: [] };

    onAddTaskButtonClick = taskTerm => {
        if (!taskTerm) return;
        if (this.state.tasks.find(el => el.name === taskTerm)) return;
        const taskItem = {
            name: taskTerm,
            complete: false,
            steps: [
                { name: "1: Don't eat the cake", complete: false },
                { name: '2: The cake is a lie', complete: false },
                {
                    name:
                        '3: Longer step to see if more text still looks nice inside steps container',
                    complete: false
                }
            ]
        };
        this.setState({
            tasks: [taskItem, ...this.state.tasks]
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

    onStepItemClick = (stepName, taskName) => {
        const newTasks = [...this.state.tasks];
        const taskIndex = newTasks.findIndex(task => task.name === taskName);
        const stepIndex = newTasks[taskIndex].steps.findIndex(
            step => step.name === stepName
        );
        newTasks[taskIndex].steps[stepIndex].complete = !newTasks[taskIndex].steps[
            stepIndex
        ].complete;
        this.setState({ tasks: newTasks });
    };

    onStepItemDelete = (stepName, taskName) => {
        const newTasks = [...this.state.tasks];
        const taskIndex = newTasks.findIndex(task => task.name === taskName);
        const newSteps = newTasks[taskIndex].steps.filter(step => step.name !== stepName);
        newTasks[taskIndex].steps = newSteps;
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
                    onStepItemClick={this.onStepItemClick}
                    onStepItemDelete={this.onStepItemDelete}
                />
            </div>
        );
    }
}

export default App;
