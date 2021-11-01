import {useState, useEffect} from 'react'
import PlanetList from '../components/PlanetList'
import PlanetDetail from '../components/PlanetDetail'
import Popup from 'reactjs-popup';



const baseURL = 'http://localhost:5000/api/planets'



const SolarSystemContainer = () => {





    return (
        <>
        <Popup trigger={<img src={"/earth.jpeg"} alt="Earth Image" height={200}/>} modal nested >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
          {' '}
          Planet Earth
          <br />
          This is where (most) of you live.
        </div>
        <div className="actions">

        </div>
      </div>
    )}
  </Popup>
            

        </>
    )
}

export default SolarSystemContainer;