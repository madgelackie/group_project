import {useState, useEffect} from 'react'
import PlanetList from '../components/PlanetList'

const baseURL = 'http://localhost:5000/api/planets'



const SolarSystemContainer = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        return fetch(baseURL)
        .then(res => res.json())
        .then(planets => setPlanets(planets))
    })


    

    return (
        <>
            <PlanetList planets={planets}/>
        </>
    )
}

export default SolarSystemContainer;