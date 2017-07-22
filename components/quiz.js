import React from 'react';
import Progress from './progress';
import Question from './question';

const Quiz = ({title, questions}) => {
    const totalQuestions = questions.length;

    return (<div>
        <h2>{title}</h2>
        <Progress current={1} total={totalQuestions} />
        <Question />
    </div>);
}

export default Quiz;
