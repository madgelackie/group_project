import React from "react";
import Planet from "./Planet";

const PlanetHover = ({hoveredPlanet}) =>{
    return(
        <>
            <h2>{hoveredPlanet.name}</h2>
            <p>{hoveredPlanet.funFact}</p>
        </>)
}

export default PlanetHover;