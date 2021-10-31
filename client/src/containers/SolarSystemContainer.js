import {useState, useEffect} from 'react'
import PlanetList from '../components/PlanetList'
import PlanetDetail from '../components/PlanetDetail'


const baseURL = 'http://localhost:5000/api/planets'



const SolarSystemContainer = () => {

    const [planets, setPlanets] = useState([])
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
            {selectedPlanet ? <PlanetDetail selectedPlanet= {selectedPlanet}/>:null}

        </>
    )
}

export default SolarSystemContainer;