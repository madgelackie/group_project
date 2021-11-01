import QuestionItem from "./QuestionItem"

const QuestionDisplay = ({quizQuestions}) => {

    const questionItems = quizQuestions.map((question) => {
        return <QuestionItem question={question} />
    })

    return (
        <div>
            <ul>
                {questionItems}
            </ul>
        </div>
    )
}

export default QuestionDisplay;