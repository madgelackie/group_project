import {useState, useEffect} from 'react';
import PlanetList from '../components/PlanetList';
import PlanetDetail from '../components/PlanetDetail';
import PlanetHover from '../components/PlanetHover'
import './Containers.css';
import {Link} from "react-router-dom";
import Popup from '../components/Popup';



const baseURL = 'http://localhost:5000/api/planets'



const SolarSystemContainer = ({onQuizButtonClick}) => {

    const [planets, setPlanets] = useState([])
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);
    const [timedPopup, setTimedPopup] = useState(false)

    useEffect(() => {
        return fetch(baseURL)
        .then(res => res.json())
        .then(planets => setPlanets(planets))
    })

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 3000)
    }, []);


    const onPlanetClick = (planet) => {
        setSelectedPlanet(planet);
    
    }

    const onPlanetHover = (planet) => {
        setHoveredPlanet(planet);
    }

    const onPlanetLeave = () => {
        setHoveredPlanet(null);
    }

    return (
        <>
            <PlanetList planets={planets} onPlanetClick={onPlanetClick} onPlanetHover={onPlanetHover} onPlanetLeave={onPlanetLeave}/>
            {selectedPlanet ? <PlanetDetail selectedPlanet= {selectedPlanet}/>:null}
            {hoveredPlanet ? <PlanetHover hoveredPlanet = {hoveredPlanet}/>:null}
            <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <h3>Welcome to our site</h3>
                <p> Click the planets for more info</p>
            </Popup>

            <Link id="link" to="/quiz">Quiz</Link>
        </>
    )
}

export default SolarSystemContainer;