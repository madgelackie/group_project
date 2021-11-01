


const PlanetsSeen = ({seenPlanets}) => {

    const seenPlanetsList = seenPlanets.map(planet => {
        return <li>{planet.name}</li>
    })

    return (
        <>
            <p>{seenPlanetsList}</p>
        </>
    )

}

export default PlanetsSeen;