import '../styles/TaskList.scss';

import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({
    tasks,
    onDeleteItemClick,
    onTaskItemClick,
    onStepItemDelete,
    onEditTask,
    onStepItemComplete,
    onEditStep,
    onAddStep
}) => {
    if (!tasks) return;
    const renderedTaskList = tasks.map(task => {
        return (
            <TaskItem
                onDeleteItemClick={onDeleteItemClick}
                onTaskItemClick={onTaskItemClick}
                onStepItemDelete={onStepItemDelete}
                onEditTask={onEditTask}
                onStepItemComplete={onStepItemComplete}
                onEditStep={onEditStep}
                onAddStep={onAddStep}
                key={task.name}
                task={task}
            />
        );
    });

    return <div className="task-list">{renderedTaskList}</div>;
};

export default TaskList;
