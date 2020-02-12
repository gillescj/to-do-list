import '../styles/TaskItem.scss';
import { ReactComponent as Logo } from '../assets/trash-bin.svg';

import React from 'react';

const TaskItem = ({ task, onDeleteItemClick, onTaskItemClick }) => {
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
            <Logo onClick={() => onDeleteItemClick(task.name)} title="delete icon" />
        </div>
    );
};

export default TaskItem;
