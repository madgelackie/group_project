import React from 'react';

const PlanetList = ({planets, onPlanetClick}) => {
    
    const handlePlanetSelect = function (event) {
        const planet = planets[event.target.value];
        onPlanetClick(planet);
    }

    const planetDetail = planets.map((planet, index) => {
       
       return <div key={index}>
               <li value={index} onPlanetClick={handlePlanetSelect}>{planet.name}</li>
               <img src={planet.image} width="200"/>
               </div>
    })




    return (
        <div>
        <ul>
        {planetDetail}
        </ul>
        </div>
            )


}

export default PlanetList;