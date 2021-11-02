import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import QuestionDisplay from "../components/QuestionDisplay";
import './Containers.css';

const baseURL = 'http://localhost:5000/api/quiz'

const QuizContainer = () => {

    const [quizQuestions, setQuizQuestions] = useState([])
    // const [currentQuestion, setCurrentQuestion] = useState(0)
    // const [showScore, setShowScore] = useState(false)
    // const [score, setScore] = useState(0)

    useEffect(() => {
        return fetch(baseURL)
        .then(res => res.json())
        .then(questions => setQuizQuestions(questions))
    })

    return (
        <div>
        <QuestionDisplay quizQuestions={quizQuestions} /> 
        <Link id="link" to="/">Planets</Link>
        </div>
    )

}



export default QuizContainer;