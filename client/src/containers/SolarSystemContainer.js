import {useState, useEffect} from 'react';
import PlanetList from '../components/PlanetList';
import PlanetDetail from '../components/PlanetDetail';
// import './Containers.css';
import {Link} from "react-router-dom";



const baseURL = 'http://localhost:5000/api/planets'



const SolarSystemContainer = ({onQuizButtonClick}) => {

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
            <Link id="link" to="/quiz">Quiz</Link>
        </>
    )
}

export default SolarSystemContainer;