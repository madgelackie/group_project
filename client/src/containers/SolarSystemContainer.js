import {useState, useEffect} from 'react';
import PlanetList from '../components/PlanetList';
import PlanetDetail from '../components/PlanetDetail';
import PlanetsSeen from '../components/PlanetsSeen';
import PlanetHover from '../components/PlanetHover'
import './Containers.css';
import {Link} from "react-router-dom";
import GeneralInfoStar from '../components/GeneralInfoStar';
import GeneralInfoStar2 from '../components/GeneralInfoStar2';
import GeneralInfoStar3 from '../components/GeneralInfoStar3';
import { getUsers, getUsersbyID } from '../services/UserService';


import Popup from '../components/Popup';



const baseURL = 'http://localhost:5000/api/planets'



const SolarSystemContainer = () => {

    const [planets, setPlanets] = useState([])
    const [generalInfo, setGeneralInfo] =useState(null);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [seenPlanets, setSeenPlanets] = useState([]);
    const [hoveredPlanet, setHoveredPlanet] = useState(null);
    const [users, setUsers] = useState([]);
    // const [selectedUser, setSelectedUser] = useState(null);
    const [timedPopup, setTimedPopup] = useState(false)

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

    useEffect(() => {
        getUsers().then((allUsers) => {
            setUsers(allUsers)}
    )}, [])
        
    // useEffect(() => {
    //     getUsersbyID().then((user) => {
    //         setSelectedUser(user)
    //     }, null)
    // })

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 3000)
    }, []);


    const onPlanetClick = (planet) => {
        setSelectedPlanet(planet);  
        for (let whateverPlanet of seenPlanets){
            console.log(whateverPlanet.name)
            console.log(planet.name)
            if (whateverPlanet.name == planet.name){
                return
            }
        }
        setSeenPlanets([...seenPlanets, planet]) 
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
            {selectedPlanet ? <PlanetsSeen seenPlanets={seenPlanets}/>:null}
            {hoveredPlanet ? <PlanetHover hoveredPlanet = {hoveredPlanet}/>:null}
            <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <h3>Welcome to our site</h3>
                <p> Click the planets for more info</p>
            </Popup>

            <Link id="link" to="/quiz">Quiz</Link>
            <br></br>
            <Link id="link" to="/user">User Page</Link>

        </>
    )
}

export default SolarSystemContainer;