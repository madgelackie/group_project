import React from "react";



const ResultPage = ({correctAnswerCounter}) =>{

    const onSubmit = () => {
        addQuizScore(correctAnswerCounter)
    }

    return(
        <>
        `Well done you scored {correctAnswerCounter}`

        <button onSubmit={onSubmit} >Submit your score</button>

        </>


        
    )
}

export default ResultPage;