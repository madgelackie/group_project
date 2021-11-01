


const PlanetsSeen = ({seenPlanets}) => {

    const seenPlanetsList = seenPlanets.map(planet => {
        return <li id="inline-list">{planet.name}</li>
    })

    return (
        <>
            <h3>So far, you have looked at:</h3>
            <p>{seenPlanetsList}</p>
        </>
    )

}

export default PlanetsSeen;