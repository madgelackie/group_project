import React from "react";

const Planet = ({planet, onPlanetClick, onPlanetHover, onPlanetLeave}) =>{
    const handleClick = function(){
        onPlanetClick(planet);
    }

    const handleHover = function(){
        onPlanetHover(planet);
    }

    const handleLeave = function(){
        onPlanetLeave()
    }

    return (
    
    <li onClick = {handleClick} onMouseEnter={handleHover} onMouseLeave={handleLeave}><img src={planet.image} /></li>)
    
    
}

export default Planet;