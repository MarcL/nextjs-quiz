import Quiz from '../components/quiz.js';

export default class extends React.Component {

    static async getInitialProps () {
        return {
            title: 'Quiz title',
            questions: [
                {
                    title: 'Question 1',
                    answers: [
                        'answer 1',
                        'answer 2',
                        'answer 3'
                    ]
                },
                {
                    title: 'Question 2',
                    answers: [
                        'answer 1',
                        'answer 2',
                        'answer 3'
                    ]
                }
            ]
        };
    }

    render () {
        const {title, questions} = this.props;

        return <Quiz title={title} questions={questions} />
    }
};