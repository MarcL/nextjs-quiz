export default ({answer, onAnswer, id}) => (
    <li onClick={() => onAnswer(id)} >
        {answer}
    </li>
);