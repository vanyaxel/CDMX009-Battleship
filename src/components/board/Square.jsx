import React from 'react';
import { useState } from 'react';
import Planet from '../General-Info/planet/Planet';
import '../General-Info/planet/planet.css';

function Square({ props }) {
    const [planet, setPlanet] = useState({
        value: null,
    });

    const handleSelectLocation = (e) => {
        console.log('sirve');
        setPlanet({ value: 'O' });
    };

    {/* <button className='square' onClick={() => setPlanet({ name: <Planet classBtn='planet-btn' /> })}/*  value={props.value} > { planet.name }</button > */ }

    return (
        <>
            <button className='square' onClick={handleSelectLocation}>{planet.value}</button >
        </>

    );
}

export default Square;
