import React from 'react';
import ovni4 from '../../images/ovni4.png';
import Btn from '../button/Button';
import './game-over.css';

function Winner() {
    return (
        <div className='game-over-view'>
            <h1 className='text-game-over'>JUEGO TERMINADO</h1>
            <h2 className='text-game-over-2'>!Felicidades haz ganado!</h2>
            <img src={ovni4} alt="end" className='ovni4' />
            <Btn name="volver a jugar" route='/general-info' classLink='link-instructions' classBtn='btn-instruction' />
        </div>
    );
}

export default Winner;