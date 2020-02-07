import '../styles/TaskItem.scss';

import React from 'react';

const TaskItem = ({ task, onTaskItemClick }) => {
    return (
        <div onClick={() => onTaskItemClick(task)} className="task-item">
            {task}
        </div>
    );
};

export default TaskItem;
