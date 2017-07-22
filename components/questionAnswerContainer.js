import QuestionAnswer from './questionAnswer';

class QuestionAnswerContainer extends React.Component {
    renderAnswers() {
        const {onAnswer} = this.props;
        const {answers} = this.props.question;

        return answers.map((answer, index) => {
            const answerKey = `answer=${index}`;
            return(
                <QuestionAnswer
                    answer={answer}
                    key={answerKey}
                    id={index}
                    onAnswer={onAnswer}
                />
            );
        });
    }

    render() {
        return(
            <ul className="question">
                {this.renderAnswers()}
            </ul>
        );
    }
}

export default QuestionAnswerContainer;
