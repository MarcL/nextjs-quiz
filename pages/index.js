import Page from '../components/page.js';
import Quiz from '../components/quiz.js';
import exampleQuestions from '../data/exampleQuestions';

export default class extends React.Component {

    static async getInitialProps () {
        // TODO: Assume it'll be asynchronous from a data source
        return exampleQuestions;
    }

    render () {
        const {title, questions} = this.props;

        return(
            <Page>
               <Quiz data={this.props} />
            </Page>
        );
    }
};