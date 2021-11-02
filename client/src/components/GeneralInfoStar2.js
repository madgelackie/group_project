import React, {useState} from "react";
import './GeneralInfo.css';


const GeneralInfoStar2 = ({generalInfo})=>{
    const [visible, setVisible] = useState(false)
    const handleClick= () =>{setVisible(!visible)}
    if (visible){return(
        <>
        <img class="star-image" src="https://cdn4.iconfinder.com/data/icons/nature-1-8/32/36-512.png" onClick = {handleClick}></img>
        <p>{generalInfo[1].descriptionTwo}</p>
        </>
        
    )}
    else {
    return(
        <img class="star-image" src="https://cdn4.iconfinder.com/data/icons/nature-1-8/32/36-512.png" onClick = {handleClick}></img>
    )}
}



export default GeneralInfoStar2;