import React, {useState} from "react";
import './GeneralInfo.css';


const GeneralInfoStar = ({generalInfo})=>{
    const [visible, setVisible] = useState(false)
    const handleClick= () =>{setVisible(!visible)}
    if (visible){return(
        <div class="star-info-box">
        <img class="star-image" src="https://cdn4.iconfinder.com/data/icons/nature-1-8/32/36-512.png" onClick = {handleClick}></img>
        <p class="gen-info">{generalInfo[0].descriptionOne}</p>
        </div>
        
    )}
    else {
    return(
        <img class="star-image" src="https://cdn4.iconfinder.com/data/icons/nature-1-8/32/36-512.png" onClick = {handleClick}></img>
    )}
}



export default GeneralInfoStar;