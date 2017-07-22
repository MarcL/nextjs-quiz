import QuestionAnswerContainer from './questionAnswerContainer';

export default ({question, onAnswer}) => (
    <div className="question">
        <h3>{question.title}</h3>
        <QuestionAnswerContainer
            question={question}
            onAnswer={onAnswer}
        />
    </div>
);