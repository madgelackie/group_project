import QuestionItem from "./QuestionItem"
import {useState} from 'react';



const QuestionDisplay = ({quizQuestions}) => {

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0)

    const answerSelected = (isCorrect) => {
        setActiveQuestionIndex(activeQuestionIndex + 1);
        console.log(activeQuestionIndex);
        if (isCorrect == true) {
          setCorrectAnswerCounter(correctAnswerCounter + 1);
        console.log(correctAnswerCounter)};
                         
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