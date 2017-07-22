import ProgressBar from './progressBar';

export default ({current, total}) => (
    <div
        className="section-progress"
        style={{
            height: '10px',
            boxShadow: 'none',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px'
        }}
    >
        <p>Part {current} of {total}</p>
        <ProgressBar current={current} total={total}/>
    </div>
);