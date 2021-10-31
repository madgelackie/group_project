import {useState, useEffect} from 'react'
import PlanetList from '../components/PlanetList'

const baseURL = 'http://localhost:5000/api/planets'



const SolarSystemContainer = () => {

    const [planets, setPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    useEffect(() => {
        return fetch(baseURL)
        .then(res => res.json())
        .then(planets => setPlanets(planets))
    })

    const onPlanetClick = (planet) => {
        setSelectedPlanet(planet);
    }
    

    return (
        <>
            <PlanetList planets={planets} onPlanetClick={onPlanetClick}/>
        </>
    )
}

export default SolarSystemContainer;