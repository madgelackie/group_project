import {useState, useEffect} from 'react'

const baseURL = 'http://localhost:5000/api/planets'



const SolarSystemContainer = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        return fetch(baseURL)
        .then(res => res.json())
        .then(planets => setPlanets(planets))
    })


    const planetDetail = planets.map((planet, index) => {
        return <li key={index}>{planet.name}</li>
    })

    return (
        <>
            <h1>Happy planet spinning</h1>
            <ul>{planetDetail}</ul>
        </>
    )
}

export default SolarSystemContainer;