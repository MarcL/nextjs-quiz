import ProgressBar from './progressBar';

export default ({current, total}) => (
    <div className="section-progress">
        <p>Part {current} of {total}</p>
        <ProgressBar current={current} total={total}/>
    </div>
);