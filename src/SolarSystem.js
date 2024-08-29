import React from 'react';

function Planet({ name }) {
    return <li>{name}</li>
}

export default function SolarSystem({ planets }) {
    return <React.Fragment>
        <hr />
        <h1>The Solar System</h1>
        {planets.map((planet, key) => planet.isGasPlanet && <Planet key={key} name={planet.name} />)}
    </React.Fragment>
}