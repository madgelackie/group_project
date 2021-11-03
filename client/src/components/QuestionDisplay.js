import QuestionItem from "./QuestionItem"
import ResultPage from "./ResultPage";
import { updateUser } from "../services/UserService";
import {useEffect, useState} from 'react';



const QuestionDisplay = ({quizQuestions, setCurrentUser, currentUser, resetQuiz}) => {

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0)
    const [displayResult, setDisplayResult] = useState(false)

    useEffect(() => {
        if (activeQuestionIndex === 10) {
            setDisplayResult(true)
            let updatedUser = currentUser
            updatedUser.score += correctAnswerCounter
            setCurrentUser(updatedUser)
            updateUser(updatedUser)
            setActiveQuestionIndex(0)              
        } 
        
        
    });


    const answerSelected = (isCorrect) => {
        setActiveQuestionIndex(activeQuestionIndex + 1);
        if (isCorrect == true) {
          setCorrectAnswerCounter(correctAnswerCounter + 1);
        }
                         
    }

    const questionItems = quizQuestions.map((question) => {
        return <>
                <QuestionItem question={question} answerSelected={answerSelected} />
                
                </>
    })

    if (quizQuestions){
    return (
        <div>
            <ul>
                {questionItems[activeQuestionIndex]}
                {displayResult ? <ResultPage displayResult={displayResult} correctAnswerCounter={correctAnswerCounter}/>: null}
            </ul>
            <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
    )
    }
    else{
        return <p>Loading</p>
    }
}

export default QuestionDisplay;