import {useState, useEffect} from 'react';
import PlanetList from '../components/PlanetList';
import PlanetDetail from '../components/PlanetDetail';
import PlanetHover from '../components/PlanetHover'
import './Containers.css';
import {Link} from "react-router-dom";
import GeneralInfoStar from '../components/GeneralInfoStar';
import GeneralInfoDetail from '../components/GeneralInfoDetail';



const baseURL = 'http://localhost:5000/api/planets'



const SolarSystemContainer = ({onQuizButtonClick}) => {

    const [planets, setPlanets] = useState([])
    const [generalInfo, setGeneralInfo] =useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);
    const [clickedStar, setClickedStar]= useState(null);

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

    const showInfo = (generalInfo) =>{
        setClickedStar (generalInfo[0]);
    
    }
    console.log(generalInfo[0])

    const onStarClick = (generalInfo)=>{
        setClickedStar(generalInfo);
    }

    return (
        <>  
            {/* <GeneralInfoStar generalInfo = {generalInfo} onStarClick = {onStarClick}/>
            {clickedStar ? <GeneralInfoDetail clickedStar = {clickedStar}/>:null} */}
            <GeneralInfoStar showInfo = {showInfo} generalInfo = {generalInfo}/>
            <PlanetList planets={planets} onPlanetClick={onPlanetClick} onPlanetHover={onPlanetHover} onPlanetLeave={onPlanetLeave}/>
            {selectedPlanet ? <PlanetDetail selectedPlanet= {selectedPlanet}/>:null}

            {hoveredPlanet ? <PlanetHover hoveredPlanet = {hoveredPlanet}/>:null}

            
            <Link id="link" to="/quiz">Quiz</Link>
        </>
    )
}

export default SolarSystemContainer;