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
            currentUser.score += correctAnswerCounter
            setCurrentUser(currentUser)
            updateUser(currentUser)
            setActiveQuestionIndex(11)              
        } 
        
        
    });

    const handleReset = () => {
        setActiveQuestionIndex(0)
        resetQuiz()
    }

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
        <div id ="quiz">
            <ul>
                {questionItems[activeQuestionIndex]}
                {displayResult ? <ResultPage currentUser={currentUser} displayResult={displayResult} correctAnswerCounter={correctAnswerCounter}/>: null}
            </ul>
            <button id = "reset" onClick={handleReset}>Restart Quiz</button>
        </div>
    )
    }
    else{
        return <p>Loading</p>
    }
}

export default QuestionDisplay;