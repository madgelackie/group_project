import {Link, Redirect} from "react-router-dom";
import {useEffect, useState} from "react";
import QuestionDisplay from "../components/QuestionDisplay";
import './Containers.css';

const baseURL = 'http://localhost:5000/api/quiz'

const QuizContainer = ({setCurrentUser, currentUser}) => {

    const [quizQuestions, setQuizQuestions] = useState([])
    const [restartQuiz, setRestartQuiz] = useState(false)

    useEffect(() => {
        return fetch(baseURL)
        .then(res => res.json())
        .then(questions => setQuizQuestions(questions), [])
    },[restartQuiz])

    const resetQuiz = () => {
        setRestartQuiz(!restartQuiz)
    }

    return (
        <div>
        <QuestionDisplay resetQuiz={resetQuiz} quizQuestions={quizQuestions} setCurrentUser={setCurrentUser} currentUser ={currentUser} /> 
        <Link id="link" to="/">Planets</Link>
        <Redirect id="link" to="/quiz">Restart Quiz</Redirect>
        </div>
    )

}



export default QuizContainer;