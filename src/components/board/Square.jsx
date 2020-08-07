import React from 'react';
import { useState } from 'react';
import Planet from '../General-Info/planet/Planet';
import '../General-Info/planet/planet.css';

function Square() {
    const [planet, setPlanet] = useState({
        value: null,
    });

    return (
        <>
            <button className='square' onClick={() => setPlanet({ value: <Planet classBtn='planet-btn' /> })}>{planet.value}</button>

        </>
    );
}

export default Square;
