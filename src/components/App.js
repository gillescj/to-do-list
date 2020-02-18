import '../styles/App.scss';
import _ from 'lodash';

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
            steps: []
        };
        this.setState({
            tasks: [taskItem, ...this.state.tasks]
        });
    };

    onEditTask = (event, taskName) => {
        const newTaskName = event.target.value;
        const newTasks = this.state.tasks.map(task => {
            if (task.name === taskName) {
                return { ...task, name: newTaskName };
            }
            return task;
        });
        this.setState({ tasks: newTasks });
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

    onStepItemDelete = (stepName, taskName) => {
        const newTasks = [...this.state.tasks];
        const taskIndex = newTasks.findIndex(task => task.name === taskName);
        const newSteps = newTasks[taskIndex].steps.filter(step => step.name !== stepName);
        newTasks[taskIndex].steps = newSteps;
        this.setState({ tasks: newTasks });
    };

    onStepItemComplete = (stepName, taskName) => {
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

    onEditStep = (event, stepName, taskName) => {
        const newTasks = this.state.tasks;
        const newStepName = event.target.value;
        const taskIndex = newTasks.findIndex(task => task.name === taskName);
        const stepIndex = newTasks[taskIndex].steps.findIndex(
            step => step.name === stepName
        );

        newTasks[taskIndex].steps[stepIndex].name = newStepName;
        this.setState({ tasks: newTasks });
    };

    onAddStep = task => {
        const newTasks = this.state.tasks;
        const newStep = { id: _.uniqueId(), name: '', complete: false };
        const taskIndex = newTasks.findIndex(el => el.name === task.name);
        newTasks[taskIndex].steps.push(newStep);
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
                    onStepItemDelete={this.onStepItemDelete}
                    onStepItemComplete={this.onStepItemComplete}
                    onEditTask={this.onEditTask}
                    onEditStep={this.onEditStep}
                    onAddStep={this.onAddStep}
                />
            </div>
        );
    }
}

export default App;
