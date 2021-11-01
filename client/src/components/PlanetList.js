import React from 'react';

import Planet from './Planet';
import './PlanetList.css'

const PlanetList = ({planets, onPlanetClick}) => {
    
    const planetItems = planets.map((planet,index)=>{
        return <Planet planet = {planet} key = {index} onPlanetClick = {onPlanetClick}/>
    })

   
       
      




    return (
        <div id= "planet-list">
        <ul id="planet-ul">
        {planetItems}
        </ul>
        </div>
            )



}

export default PlanetList;