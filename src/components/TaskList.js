import '../styles/TaskList.scss';

import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskItemClick }) => {
    if (!tasks) return;
    const renderedTaskList = tasks.map(task => {
        return <TaskItem onTaskItemClick={onTaskItemClick} key={task} task={task} />;
    });

    return <div className="task-list">{renderedTaskList}</div>;
};

export default TaskList;
