


const PlanetsSeen = ({seenPlanets}) => {

    const seenPlanetsList = seenPlanets.map(planet => {
        return planet.name
    })
    const seenPlanetsNoDuplicates = [seenPlanetsList[0]];
    for (var i=1; i<seenPlanetsList.length; i++) {
        if (seenPlanetsList[i] != [i-1]) seenPlanetsNoDuplicates.push(seenPlanetsList[i]);
        console.log(seenPlanetsNoDuplicates)
    }
    const newPlanetsSeenList = seenPlanetsNoDuplicates.map((planet) => {
        return <li id="inline-list" >{planet.name}</li>
        
    })
    // const seenPlanetsNoDuplicates = (seenPlanetsList) => {
    //     let planetCompare = [seenPlanetsList[0]]
    //     for (var i=1; i<seenPlanetsList.length; i++) {
    //     if (seenPlanetsList[i] != [i-1]) 
    //     return planetCompare.push(seenPlanetsList[i]);   
    // }}

    // const newPlanetsSeenList = planetCompare.map((planet) => {
    //     return <li id="inline-list" >{planet.name}</li>

    // return <li id="inline-list">{planet.name}</li>
    // const view = console.log(newPlanetsSeenList)

    return (
        <>
            <h3>So far, you have looked at:</h3>
            <p>{newPlanetsSeenList}</p>
            {/* <button onClick={handleClearClick}>CLEAR LIST</button> */}
        </>
    )

}

export default PlanetsSeen;