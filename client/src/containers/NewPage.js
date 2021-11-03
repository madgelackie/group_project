import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import QuestionDisplay from "../components/QuestionDisplay";
import './Containers.css';
import './Quiz.css';

const baseURL = 'http://localhost:5000/api/quiz'

const QuizContainer = () => {

    const [quizQuestions, setQuizQuestions] = useState([])
    
    useEffect(() => {
        return fetch(baseURL)
        .then(res => res.json())
        .then(questions => setQuizQuestions(questions), [])
    })

    return (
        <>
        <h1 id="quiz-heading">Time to test your knowledge, answer these questions to find out if you're an astronaut
    </h1>
        <div>
        
        <QuestionDisplay  quizQuestions={quizQuestions} /> 
        </div>
        <Link class="link" to="/">Back to Planets</Link>
        </>
        
    )

}



export default QuizContainer;