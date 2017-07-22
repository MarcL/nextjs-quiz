import React from 'react';

const ProgressBarMark = ({filled}) => {
    const className = filled ? 'fa fa-circle filled' : 'fa fa-circle';
    return (
        <span className="mark">
            <i className={className} aria-hidden="true"></i>
        </span>
    );
};

class ProgressBar extends React.Component {
    constructor() {
        super();
    }

    renderMarks() {
        const {current, total} = this.props;

        let marks = [];
        for(let i = 0; i < total; i++) {
            const filled = (i < current);
            marks.push(<ProgressBarMark filled={filled} />);
        }

        return marks;
    }

    render() {
        const {current, total} = this.props;

        const currentValue = ((current - 1) / total) * 100;
        const styleWidth = `${currentValue}%`;

        return (
            <div className="progress">
                <div
                    className="progress-bar progress-bar-info"
                    role="progressbar"
                    aria-valuenow={currentValue}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: styleWidth}}
                >
                    {/*<div className="marks">
                        {this.renderMarks()}
                    </div>*/}
                </div>
            </div>
        );
    }
};

// style="width:0%">

export default ProgressBar;