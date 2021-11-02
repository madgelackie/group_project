import React from 'react';

import Planet from './Planet';
import './PlanetList.css'

const PlanetList = ({planets, onPlanetClick, onPlanetHover, onPlanetLeave}) => {

    
    
    const planetItems = planets.map((planet,index)=>{
        return <Planet planet = {planet} key = {index} onPlanetClick = {onPlanetClick} onPlanetHover = {onPlanetHover} onPlanetLeave={onPlanetLeave}/>
    })

   
       
      




    return (
        <div id= "planet-list">
<<<<<<< HEAD
        <ul id="planet-ul">
=======
        <ul id= "planet-ul">
>>>>>>> develop
        {planetItems}
        </ul>
        </div>
            )



}

export default PlanetList;