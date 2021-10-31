import React from 'react';
import Planet from './Planet';

const PlanetList = ({planets, onPlanetClick}) => {
    
    const planetItems = planets.map((planet,index)=>{
        return <Planet planet = {planet} key = {index} onPlanetClick = {onPlanetClick}/>
    })

   
       
      




    return (
        <div>
        <ul>
        {planetItems}
        </ul>
        </div>
            )


}

export default PlanetList;