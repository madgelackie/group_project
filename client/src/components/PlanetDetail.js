import React from "react";
import Planet from "./Planet";

const PlanetDetail = ({selectedPlanet}) =>{
    return(
        <>
            <h2>{selectedPlanet.name}</h2>
            <p>{selectedPlanet.description}</p>
        </>)
}

export default PlanetDetail;