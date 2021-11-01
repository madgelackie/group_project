import React from "react";

const Planet = ({planet, onPlanetClick}) =>{
    const handleClick = function(){
        onPlanetClick(planet);
    }

    return (
    
    <li id="planet-list-item" onClick = {handleClick}><img src={planet.image} /></li>)
    
    
}

export default Planet;