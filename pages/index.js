import Quiz from '../components/quiz.js';

export default class extends React.Component {

    static async getInitialProps () {
        return {title: 'Test title'}
    }

    render () {
        return <Quiz title={this.props.title} />
    }
};