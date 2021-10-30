import {useState, useEffect} from 'react'

const baseURL = 'http://localhost:5000/api/planets'



const SolarSystemContainer = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        return fetch(baseURL)
        .then(res => res.json())
        .then(planets => setPlanets(planets), [])
    })

    const tempPlanetDetail = planets.map((planet) => {
        return <p>{planet.name}</p> })

    return (
        <>
            <h1>Happy planet spinning, {tempPlanetDetail}</h1>
        </>
    )
}

export default SolarSystemContainer;