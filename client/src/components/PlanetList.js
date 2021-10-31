import React from 'react';

const PlanetList = ({planets}) => {
    const planetDetail = planets.map((planet, index) => {
        return <li key={index}>{planet.name}</li>
    })

    return (
        <div>
        {planetDetail}
        </div>
    )


}

export default PlanetList;