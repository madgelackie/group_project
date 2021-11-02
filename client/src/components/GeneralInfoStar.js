import React, {useState} from "react";
import GeneralInfoDetail from "./GeneralInfoDetail";

const GeneralInfoStar = ({generalInfo})=>{
    const [visible, setVisible] = useState(false)
    const handleClick= () =>{setVisible(!visible)}
    if (visible){return(
        <>
        <button onClick = {handleClick}>Show Info</button>
        <p>{generalInfo[0].descriptionOne}</p>
        </>
        
    )}
    else {
    return(
        <button onClick = {handleClick}>Show Info</button>
    )}
}

//     // return(
//         <>
        
//         {/* <img src="https://cdn4.iconfinder.com/data/icons/nature-1-8/32/36-512.png"></img> */}
//         </>
//     )
// }

export default GeneralInfoStar;