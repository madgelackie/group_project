import React from "react";
import Planet from "./Planet";

const PlanetDetail = ({selectedPlanet}) =>{
    return(
    <p>{selectedPlanet.name}</p>)
}

export default PlanetDetail;