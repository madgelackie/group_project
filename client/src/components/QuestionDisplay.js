import QuestionItem from "./QuestionItem"
import ResultPage from "./ResultPage";
import {useEffect, useState} from 'react';



const QuestionDisplay = ({quizQuestions}) => {

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0)
    const [displayResult, setDisplayResult] = useState(false)

    useEffect(() => {
        activeQuestionIndex === quizQuestions.length ? setDisplayResult(true) : setDisplayResult(false)
    },);


    const answerSelected = (isCorrect) => {
        setActiveQuestionIndex(activeQuestionIndex + 1);
        console.log(activeQuestionIndex);
        if (isCorrect == true) {
          setCorrectAnswerCounter(correctAnswerCounter + 1);
        console.log(correctAnswerCounter)};
                         
    }

    const questionItems = quizQuestions.map((question) => {
        return <>
                <QuestionItem question={question} answerSelected={answerSelected} />
                
                </>
    })

    return (
        <div>
            <ul>
                {questionItems[activeQuestionIndex]}
                {displayResult ? <ResultPage displayResult={displayResult} correctAnswerCounter={correctAnswerCounter}/>: null}
            </ul>
        </div>
    )
}

export default QuestionDisplay;