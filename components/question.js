import QuestionAnswerContainer from './questionAnswerContainer';

export default ({question, onAnswer, subtitle}) => (
    <div className="question w-75 center">
        <h3 className="f3 tc">{question.title}</h3>
        <h4 className="f4 tc light-silver fw4">{subtitle}</h4>
        <QuestionAnswerContainer
            question={question}
            onAnswer={onAnswer}
        />
    </div>
);