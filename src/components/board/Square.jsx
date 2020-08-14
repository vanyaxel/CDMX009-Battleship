import React from 'react';
import { useState } from 'react';
import Planet from '../General-Info/planet/Planet';
import '../General-Info/planet/planet.css';

function Square({ props }) {
    const [planet, setPlanet] = useState({
        name: null,
        isSelected: false,
        value: 0,
    });

    const handleSelectLocation = (e) => {
        console.log(e.target.value);
    };

    console.log(planet);

    {/* <button className='square' onClick={() => setPlanet({ name: <Planet classBtn='planet-btn' /> })}/*  value={props.value} > { planet.name }</button > */ }

    return (
        <>
            <button className='square' value='1' onClick={handleSelectLocation}>{planet.name}</button>

        </>

    );
}

export default Square;
