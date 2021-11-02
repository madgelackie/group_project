import QuestionItem from "./QuestionItem"
import {useState} from 'react';



const QuestionDisplay = ({quizQuestions}) => {

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)

    const answerSelected = (isCorrect) => {
        console.log(isCorrect);
    }

    const questionItems = quizQuestions.map((question) => {
        return <QuestionItem question={question} answerSelected={answerSelected} />
    })

    return (
        <div>
            <ul>
                {questionItems[activeQuestionIndex]}
            </ul>
        </div>
    )
}

export default QuestionDisplay;