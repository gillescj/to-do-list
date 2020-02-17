import '../styles/TaskItem.scss';
import { ReactComponent as TrashLogo } from '../assets/trash-bin.svg';
import { ReactComponent as EditLogo } from '../assets/edit-pen.svg';
import StepItem from './StepItem';

import React from 'react';

const TaskItem = ({
    task,
    onDeleteItemClick,
    onTaskItemClick,
    onStepItemClick,
    onStepItemDelete
}) => {
    const renderedTaskSteps = task.steps.map(step => (
        <StepItem
            onStepItemClick={onStepItemClick}
            onStepItemDelete={onStepItemDelete}
            key={step.name}
            step={step}
            taskName={task.name}
        />
    ));

    return (
        <div className="task-item">
            <div
                onClick={() => onTaskItemClick(task.name)}
                className={
                    task.complete ? 'task-item-content complete' : 'task-item-content'
                }
            >
                {task.name}
            </div>
            <EditLogo title="edit-task" />
            <TrashLogo onClick={() => onDeleteItemClick(task.name)} title="delete-task" />
            <ul className="task-steps">{renderedTaskSteps}</ul>
        </div>
    );
};

export default TaskItem;
