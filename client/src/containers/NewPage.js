import {Link, Redirect} from "react-router-dom";
import {useEffect, useState} from "react";
import QuestionDisplay from "../components/QuestionDisplay";
import './Containers.css';
import './Quiz.css';

const baseURL = 'http://localhost:5000/api/quiz'

const QuizContainer = ({setCurrentUser, currentUser}) => {

    const [quizQuestions, setQuizQuestions] = useState([])
    const [restartQuiz, setRestartQuiz] = useState(false)

    useEffect(() => {
        return fetch(baseURL)
        .then(res => res.json())
        .then(questions => {
            console.log("Reset questions");
            setQuizQuestions([...questions])})
    },[])

    const resetQuiz = () => {
        // setQuizQuestions([])
        setRestartQuiz(!restartQuiz)

    }

    return (
        <>
        <h1 id="quiz-heading">Time to test your knowledge, answer these questions to find out if you're an astronaut
    </h1>
        <div>

        <QuestionDisplay key={restartQuiz} resetQuiz={resetQuiz} quizQuestions={quizQuestions} setCurrentUser={setCurrentUser} currentUser ={currentUser} /> 
        <Link id="link" to="/">Planets</Link>
        <Redirect id="link" to="/quiz">Restart Quiz</Redirect>

        </div>
        <Link class="link" to="/">Back to Planets</Link>
        </>
        
    )

}



export default QuizContainer;