import React from "react";

const Planet = ({planet, onPlanetClick, onPlanetHover}) =>{
    const handleClick = function(){
        onPlanetClick(planet);
    }

    const handleHover = function(){
        onPlanetHover(planet);
    }

    return (
    
    <li onClick = {handleClick} onMouseEnter={handleHover}><img src={planet.image} /></li>)
    
    
}

export default Planet;