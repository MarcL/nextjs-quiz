import Progress from './progress';
import Question from './question';

export default ({title, questions}) => (
    <div>
        <h2>{title}</h2>
        <Progress />
        <Question />
    </div>
);
