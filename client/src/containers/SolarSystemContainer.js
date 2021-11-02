import {useState, useEffect} from 'react';
import PlanetList from '../components/PlanetList';
import PlanetDetail from '../components/PlanetDetail';
import PlanetHover from '../components/PlanetHover'
import './Containers.css';
import {Link} from "react-router-dom";
import GeneralInfoStar from '../components/GeneralInfoStar';
import GeneralInfoStar2 from '../components/GeneralInfoStar2';
import GeneralInfoStar3 from '../components/GeneralInfoStar3';




const baseURL = 'http://localhost:5000/api/planets'



const SolarSystemContainer = ({onQuizButtonClick}) => {

    const [planets, setPlanets] = useState([])
    const [generalInfo, setGeneralInfo] =useState(null);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);
    

    useEffect(() => {
        return fetch(baseURL)
        .then(res => res.json())
        .then(planets => setPlanets(planets))
    },[])

    useEffect(() => {
        return fetch("http://localhost:5000/api/generalInfo")
        .then(res => res.json())
        .then(info => setGeneralInfo(info))
    },[])


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
            
            { <GeneralInfoStar generalInfo = {generalInfo}/>}
            { <GeneralInfoStar2 generalInfo = {generalInfo}/>}
            { <GeneralInfoStar3 generalInfo = {generalInfo}/>}

            <PlanetList planets={planets} onPlanetClick={onPlanetClick} onPlanetHover={onPlanetHover} onPlanetLeave={onPlanetLeave}/>
            {selectedPlanet ? <PlanetDetail selectedPlanet= {selectedPlanet}/>:null}
            {hoveredPlanet ? <PlanetHover hoveredPlanet = {hoveredPlanet}/>:null}
            <Link id="link" to="/quiz">Quiz</Link>
        </>
    )
}

export default SolarSystemContainer;