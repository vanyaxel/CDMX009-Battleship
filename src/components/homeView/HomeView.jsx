import React from 'react';
import './home-view.css';

import ovni1 from '../../images/ovni1.png';
import spaceShip from '../../images/spaceShip.png';
import Btn from '../button/Button';

function HomeView() {
    return (
        <>
            <div className='container-space-ship'>
                <img src={spaceShip} alt="space-ship" className='space-ship' />
            </div>
            <div className='text-home-view'>
                <div>
                    <p className='title-game'>CONQUERING PLANETS</p>
                </div>
                <Btn name="jugar" route='/game' classBtn='btn-play' classLink='route' />
                <Btn name="instrucciones" route='/instructions' classBtn='btn-play' classLink='route' />
            </div>
            <img className='img-ovni1' src={ovni1} alt="ovni1" />
        </>
    );
}

export default HomeView;