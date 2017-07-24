import ProgressBar from './progressBar';

export default ({current, total}) => (
    <div
        id="section-progress"
        className="tc"
    >
        <p className="f4 gray">Part {current} of {total}</p>
        <ProgressBar
            current={current}
            total={total}
        />
    </div>
);