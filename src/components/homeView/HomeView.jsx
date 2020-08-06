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
                <Btn name="jugar" route='/user-info' />
                <Btn name="instrucciones" route='/instructions' />
            </div>
            <div className='container-imag-ovni1'>
                <img className='img-ovni1' src={ovni1} alt="ovni1" />
            </div>
        </>
    );
}

export default HomeView;