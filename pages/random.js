import 'isomorphic-fetch'

import Page from '../components/page.js';
import Quiz from '../components/quiz.js';
import exampleQuestions from '../data/exampleQuestions';
import triviaApiToQuestions from '../utils/triviaApiToQuestions';

export default class extends React.Component {

    static async getInitialProps () {
        const categories = [
            {name: 'books', category: 10},
            {name: 'film', category: 11},
            {name: 'music', category: 12},
            {name: 'musicals and theatre', category: 13}
        ];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];

        // Random trivia from Open Trivia API
        const results = await fetch(`https://opentdb.com/api.php?amount=10&category=${randomCategory.category}`);
        const quizQuestions = await results.json();

        const questions = triviaApiToQuestions(
            quizQuestions,
            `Random ${randomCategory.name} quiz`
        );
        return questions;
    }

    render () {
        return(
            <Page>
                <Quiz data={this.props} />
            </Page>
        );
    }
};