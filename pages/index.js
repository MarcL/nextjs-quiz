import Page from '../components/page.js';
import Quiz from '../components/quiz.js';

export default class extends React.Component {

    static async getInitialProps () {
        // TODO: Get this from somewhere
        return {
            title: 'Earning Potential',
            questions: [
                {
                    title: 'Are you a spender or a saver?',
                    answers: [
                        'In the past year, I have always paid my credit card bill in full each month',
                        'In the past year, I have sometimes held a monthly credit card debt',
                    ]
                },
                {
                    title: 'Which is more important: freedom or security?',
                    answers: [
                        'I\'m currently a full-time employee',
                        'I\'m currently a full-time employee with a side gig',
                        'I\'m currently working as a freelancer or am a part-time employee'
                    ]
                }
            ]
        };
    }

    render () {
        const {title, questions} = this.props;

        return(
            <Page>
               <Quiz title={title} questions={questions} />
            </Page>
        );
    }
};