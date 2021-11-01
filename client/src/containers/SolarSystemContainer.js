import {useState, useEffect} from 'react'
import PlanetList from '../components/PlanetList'
import PlanetDetail from '../components/PlanetDetail'
import PlanetHover from '../components/PlanetHover'


const baseURL = 'http://localhost:5000/api/planets'



const SolarSystemContainer = () => {

    const [planets, setPlanets] = useState([])
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);

    useEffect(() => {
        return fetch(baseURL)
        .then(res => res.json())
        .then(planets => setPlanets(planets))
    })


    const onPlanetClick = (planet) => {
        setSelectedPlanet(planet);
    }

    const onPlanetHover = (planet) => {
        setHoveredPlanet(planet);
    }

    return (
        <>
            <PlanetList planets={planets} onPlanetClick={onPlanetClick} onPlanetHover={onPlanetHover}/>
            {selectedPlanet ? <PlanetDetail selectedPlanet= {selectedPlanet}/>:null}
            {hoveredPlanet ? <PlanetHover hoveredPlanet = {hoveredPlanet}/>:null}

        </>
    )
}

export default SolarSystemContainer;