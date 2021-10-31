import React from "react";

const Planet = ({planet, onPlanetClick}) =>{
    const handleClick = function(){
        onPlanetClick(planet);
    }

    return (
    
    <li onClick = {handleClick}><img src={planet.image} width= "200"/></li>)
    
    
}

export default Planet;