import React from "react";
import GeneralInfoDetail from "./GeneralInfoDetail";

const GeneralInfoStar = ({generalInfo,showInfo, index})=>{
    
    return(
        <>
        <input onClick = {showInfo}type= "image"src = "https://cdn4.iconfinder.com/data/icons/nature-1-8/32/36-512.png" generalInfo = {generalInfo} key = {index}></input>
        {/* <img src="https://cdn4.iconfinder.com/data/icons/nature-1-8/32/36-512.png"></img> */}
        </>
    )
}

export default GeneralInfoStar;