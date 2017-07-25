import QuestionAnswer from './questionAnswer';

class QuizResults extends React.Component {
    renderAnswers() {
        const {data: {questions}, answers} = this.props;

        return questions
            .map((question, index) => {
                const questionAnswerIndex = answers[index];
                const answer = question.answers[questionAnswerIndex];
                const answerKey = `answer=${index}`;

                return(
                    <QuestionAnswer
                        answer={answer}
                        key={answerKey}
                        id={index}
                        onAnswer={() => {}}
                    />
                );
            });
    }

    render() {
        const {data: {title, questions}} = this.props;

        return (
            <div className="mw6 center tc">
                <p className="f4 gray">Answers</p>
                {this.renderAnswers()}
            </div>
        );
    }
}

export default QuizResults;
