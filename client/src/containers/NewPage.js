import {Link} from "react-router-dom";
import {useState} from "react";
import './Containers.css';


const QuizContainer = () => {

    const [quizQuestion, setQuizQuestion] = useState(null)



    return (
        <>
        <h1>QUIZ TIME</h1>
        <Link id="link" to="/">Planets</Link>
        </>
    )
}

export default QuizContainer;