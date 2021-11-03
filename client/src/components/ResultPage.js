import React from "react";



const ResultPage = ({correctAnswerCounter, currentUser}) =>{

    return(
        `Well done ${currentUser.name}, your result is ${correctAnswerCounter} out of 10.`
    )
}

export default ResultPage;