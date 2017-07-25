import decode from 'ent/decode';

function fisherYatesShuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

const createQuestion = (triviaQuestion) => {
    const answers =
        [
            ...triviaQuestion['incorrect_answers'],
            triviaQuestion['correct_answer']
        ].map((answer) => {
            return decode(answer);
        });

    return {
        title: triviaQuestion.question,
        answers: fisherYatesShuffle(answers)
    };
};

const triviaApiToQuestions = (triviaApiResults, title, subtitle = '') => {
    const {results: triviaQuestions} = triviaApiResults;

    const questions = triviaQuestions.map(createQuestion);
    return {
        title,
        subtitle,
        questions
    };
};

export default triviaApiToQuestions;
