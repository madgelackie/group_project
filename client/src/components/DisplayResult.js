import React from "react";


const DisplayResult = ({result}) =>{

    if (result === true)
    return(
        <>
            <h2>Welcome done</h2>
            <p>Your scored out of 10</p>
        </>)
}

export default DisplayResult;