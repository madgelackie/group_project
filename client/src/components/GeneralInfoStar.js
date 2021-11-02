import React, {useState} from "react";


const GeneralInfoStar = ({generalInfo})=>{
    const [visible, setVisible] = useState(false)
    const handleClick= () =>{setVisible(!visible)}
    if (visible){return(
        <>
        <img  src="https://cdn4.iconfinder.com/data/icons/nature-1-8/32/36-512.png" onClick = {handleClick}></img>
        <p>{generalInfo[0].descriptionOne}</p>
        </>
        
    )}
    else {
    return(
        <img src="https://cdn4.iconfinder.com/data/icons/nature-1-8/32/36-512.png" onClick = {handleClick}></img>
    )}
}

//     // return(
//         <>
        
//         {/* <img src="https://cdn4.iconfinder.com/data/icons/nature-1-8/32/36-512.png"></img > */}
//         </>
//     )
// }

export default GeneralInfoStar;