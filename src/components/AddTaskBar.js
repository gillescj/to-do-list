import '../styles/AddTaskBar.scss';
import React from 'react';

class AddTaskBar extends React.Component {
    state = { taskTerm: '' };

    onInputChange = event => {
        this.setState({ taskTerm: event.target.value });
    };

    onAddTaskButtonClick = () => {
        this.props.onAddTaskButtonClick(this.state.taskTerm);
        this.setState({ taskTerm: '' });
    };

    onEnterClick = event => {
        if (event.key === 'Enter') {
            this.props.onAddTaskButtonClick(this.state.taskTerm);
            this.setState({ taskTerm: '' });
        }
    };

    render() {
        return (
            <div className="add-task-bar">
                <input
                    value={this.state.taskTerm}
                    onChange={this.onInputChange}
                    onKeyDown={this.onEnterClick}
                    type="text"
                />
                <button onClick={this.onAddTaskButtonClick}>Add</button>
            </div>
        );
    }
}

export default AddTaskBar;
