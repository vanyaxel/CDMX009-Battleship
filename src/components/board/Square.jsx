import React from 'react';
import { useState } from 'react';

function Square() {
    const [planet, setPlanet] = useState({
        value: null,
    });

    return (
        <>
            <button className='square' onClick={() => setPlanet({ value: 'O' })}>{planet.value}</button>
        </>
    );
}

export default Square;
