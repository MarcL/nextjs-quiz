import Quiz from '../components/quiz.js';

export default class extends React.Component {

    static async getInitialProps () {
        return {
            title: 'Quiz title',
            questions: [
                {
                    title: 'Question 1',
                    answers: []
                },
                {
                    title: 'Question 2',
                    answers: []
                }
            ]
        };
    }

    render () {
        const {title, questions} = this.props;

        return <Quiz title={title} questions={questions} />
    }
};