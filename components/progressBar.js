import React from 'react';

const ProgressBarMark = ({filled}) => {
    const className = filled ? 'fa fa-circle fa-2x filled' : 'fa fa-2x fa-circle';
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
        const {current, total, colour='bg-blue'} = this.props;

        const currentValue = ((current - 1) / total) * 100;
        const styleWidth = `${currentValue}%`;
        console.log(styleWidth);

        const progressBarClass = `${colour} br-pill h1 shadow-1`;

        return (
            <div className="bg-moon-gray br-pill h1 overflow-y-hidden center w-50">
                <div className={progressBarClass} style={{width: styleWidth}}></div>
                <ProgressBarMark filled={true} />
            </div>
        );
    }
};

export default ProgressBar;