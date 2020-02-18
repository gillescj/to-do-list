import '../styles/StepItem.scss';
import TextareaAutosize from 'react-textarea-autosize';

import React from 'react';

class StepItem extends React.Component {
    state = { stepTerm: '', oldStepTerm: '' };

    componentDidMount() {
        this.setState({
            stepTerm: this.props.step.name,
            oldStepTerm: this.props.step.name
        });
    }

    onInputChange = event => {
        this.setState({ stepTerm: event.target.value });
    };

    onEnterClick = event => {
        if (event.key === 'Enter') {
            this.props.onEditStep(event, this.props.step.name, this.props.taskName);
            this.setState({
                stepTerm: this.props.step.name,
                oldStepTerm: this.props.step.name
            });
        }
    };

    onStepBlur = event => {
        this.props.onEditStep(event, this.props.step.name, this.props.taskName);
        this.setState({
            stepTerm: this.props.step.name,
            oldStepTerm: this.props.step.name
        });
    };

    render() {
        return (
            <li className="step-item">
                <div
                    onClick={() =>
                        this.props.onStepItemComplete(
                            this.props.step.name,
                            this.props.taskName
                        )
                    }
                    className="complete-step"
                >
                    &#10004;
                </div>
                <div
                    className={
                        this.props.step.complete
                            ? 'step-item-content complete'
                            : 'step-item-content'
                    }
                >
                    <TextareaAutosize
                        onChange={this.onInputChange}
                        onKeyDown={this.onEnterClick}
                        onBlur={this.onStepBlur}
                        type="text"
                        value={this.state.stepTerm}
                        placeholder="Add Step Here..."
                    />
                </div>

                <div
                    onClick={() =>
                        this.props.onStepItemDelete(
                            this.props.step.name,
                            this.props.taskName
                        )
                    }
                    className="delete-step"
                >
                    &times;
                </div>
            </li>
        );
    }
}

export default StepItem;
