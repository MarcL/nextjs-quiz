export default ({answer, onAnswer, id}) => (
    <div
        className="w-100 pa2 mb3 bg-light-gray bg-animate hover-bg-light-green grow"
        onClick={() => onAnswer(id)}
    >
        <div className="dtc w3 f1">
            <i className="dark-gray fa fa-2x fa-check-circle-o"></i>
        </div>
        <div className="dtc v-mid pl3">
            <p>{answer}</p>
        </div>
    </div>
);