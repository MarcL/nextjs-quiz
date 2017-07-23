import React from 'react';
import Progress from './progress';
import Question from './question';

class Quiz extends React.Component {
    constructor() {
        super();

        this.handleAnswer = this.handleAnswer.bind(this);

        this.state = {
            answers: [],
            currentQuestion: 1
        };
    }

    handleAnswer(answerId) {
        console.log(`Answer : ${answerId}`);
        this.setState({
            answers: [...this.state.answers, answerId],
            currentQuestion: this.state.currentQuestion + 1
        });
    }
    renderQuiz(currentQuestionIndex, totalQuestions) {
        const {questions} = this.props;
        const currentQuestion = questions[currentQuestionIndex - 1];

        return(
            <div>
                <Progress current={currentQuestionIndex} total={totalQuestions} />
                <Question question={currentQuestion} onAnswer={this.handleAnswer} />
            </div>
        );
    }

    renderEndScreen() {
        return(
            <div>
                <h3>Quiz has ended</h3>
            </div>
        );
    }

    render() {
        const {title, questions} = this.props;
        const totalQuestions = questions.length;
        const currentQuestionIndex = this.state.currentQuestion;
        const currentQuestion = questions[currentQuestionIndex - 1];

        const renderComponent = (currentQuestionIndex > totalQuestions)
            ? this.renderEndScreen()
            : this.renderQuiz(currentQuestionIndex, totalQuestions);

        return (
            <div className="quiz">
                <h2 className="quiz-title">{title}</h2>
                <div>
                    {renderComponent}
                </div>
            </div>
        );
    }
}

export default Quiz;
