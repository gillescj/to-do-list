import '../styles/TaskList.scss';

import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteItemClick, onTaskItemClick }) => {
    if (!tasks) return;
    const renderedTaskList = tasks.map(task => {
        return (
            <TaskItem
                onDeleteItemClick={onDeleteItemClick}
                onTaskItemClick={onTaskItemClick}
                key={task.name}
                task={task}
            />
        );
    });

    return <div className="task-list">{renderedTaskList}</div>;
};

export default TaskList;
