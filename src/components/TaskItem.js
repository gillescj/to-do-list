import _ from 'lodash';
import '../styles/TaskItem.scss';
import { ReactComponent as TrashLogo } from '../assets/trash-bin.svg';
import { ReactComponent as AddLogo } from '../assets/add.svg';
import { ReactComponent as CheckmarkLogo } from '../assets/checkmark.svg';
import StepItem from './StepItem';

import React from 'react';

class TaskItem extends React.Component {
    state = { taskTerm: '', oldTaskTerm: '' };

    componentDidMount() {
        this.setState({
            taskTerm: this.props.task.name,
            oldTaskTerm: this.props.task.name
        });
    }

    onInputChange = event => {
        this.setState({ taskTerm: event.target.value });
    };

    onEnterClick = event => {
        if (event.key === 'Enter') {
            this.props.onEditTask(event, this.state.oldTaskTerm);
            this.setState({
                taskTerm: this.props.task.name,
                oldTaskTerm: this.props.task.name
            });
        }
    };

    onTaskBlur = event => {
        this.props.onEditTask(event, this.state.oldTaskTerm);
        this.setState({
            taskTerm: this.props.task.name,
            oldTaskTerm: this.props.task.name
        });
    };

    renderTaskSteps = () => {
        if (!this.props.task.steps) return null;
        const renderedTaskSteps = this.props.task.steps.map(step => {
            const stepID = _.uniqueId();
            return (
                <StepItem
                    onStepItemDelete={this.props.onStepItemDelete}
                    onStepItemComplete={this.props.onStepItemComplete}
                    onEditStep={this.props.onEditStep}
                    key={stepID}
                    step={step}
                    taskName={this.props.task.name}
                />
            );
        });
        return renderedTaskSteps;
    };

    render() {
        return (
            <div className="task-item">
                <div
                    className={
                        this.props.task.complete
                            ? 'task-item-content complete'
                            : 'task-item-content'
                    }
                >
                    <input
                        onChange={this.onInputChange}
                        onKeyDown={this.onEnterClick}
                        onBlur={this.onTaskBlur}
                        type="text"
                        value={this.state.taskTerm}
                    />
                </div>
                <CheckmarkLogo
                    onClick={() => this.props.onTaskItemClick(this.props.task.name)}
                    title="Mark Complete"
                />
                <AddLogo
                    onClick={() => this.props.onAddStep(this.props.task)}
                    title="Add Step"
                />
                <TrashLogo
                    onClick={() => this.props.onDeleteItemClick(this.props.task.name)}
                    title="Delete Task"
                />
                <ul className="task-steps">{this.renderTaskSteps()}</ul>
            </div>
        );
    }
}

export default TaskItem;
