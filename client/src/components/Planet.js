import React from "react";
import Popup from "reactjs-popup";


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
    
    <li id ="planet-list-item"> 
    {/* onClick = {handleClick} onMouseEnter={handleHover} onMouseLeave={handleLeave}> */}
    <Popup contentStyle={{ width: "450px" }} trigger={<img src={planet.image} alt="Earth image" />} modal nested >
    {close => (
        <div className="modal">
        <button classname="close" onClick={close}>
            &times;
        </button>
        <div className="header"> {planet.name} </div>
        <div className="content">
          {' '}
          
          <br />
          <p>Description: {planet.description}</p>
          <p>Average Temperature: {planet.avgTemperature}</p>
          <p>Size(radius): {planet.sizeRadius}</p>
          <p>Distance From Sun: {planet.distanceFromTheSun}</p>
          <p>Length of Day: {planet.lengthOfDay}</p>
          <p>Length of Year: {planet.lengthOfYear}</p>
          <p>Number of Moons: {planet.noOfMoons}</p>
          <p>Fun Fact: {planet.funFact}</p>
        
        </div>
        <div className="actions">

        </div>
      </div>
    )}
    </Popup>

    </li>)
    
    
}

export default Planet;