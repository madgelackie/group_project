
const QuestionItem = ({question, answerSelected}) => {

    const answerElements = question.answerOptions.map((answer) => {
        return <button onClick={() => answerSelected(answer.isCorrect)}>{answer.answerText}</button>

    }) 

    return (
    <>
    <li id = "quiz">
    <h3 id="question">{question.questionText}</h3>
    {answerElements}
    </li>
    </>
    )
    
}

export default QuestionItem;