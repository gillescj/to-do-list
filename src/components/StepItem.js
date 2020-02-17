import '../styles/StepItem.scss';
import React from 'react';

const StepItem = ({ step, taskName, onStepItemClick, onStepItemDelete }) => {
    return (
        <li className="step-item">
            <div
                onClick={() => onStepItemClick(step.name, taskName)}
                className={
                    step.complete ? 'step-item-content complete' : 'step-item-content'
                }
            >
                {step.name}
            </div>
            <div
                onClick={() => onStepItemDelete(step.name, taskName)}
                className="delete-step"
            >
                &times;
            </div>
        </li>
    );
};

export default StepItem;
