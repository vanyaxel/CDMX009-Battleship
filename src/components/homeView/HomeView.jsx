import React from 'react';
import './home-view.css';

import ovni1 from '../../images/ovni1.png';
import spaceShip from '../../images/spaceShip.png';
import Btn from '../button/Button';

function HomeView() {

    return (
        <>
            <div className='home-view'>
                <div className='container-ovni1'>
                    <img className='img-ovni1' src={ovni1} alt="ovni1" />
                </div>
                <div className='container-text-home'>
                    <p className='title-game'>CONQUERING PLANETS</p>
                    <Btn name='jugar' route='/general-info' classBtn='btn-play' classLink='route' />
                    <Btn name='instrucciones' route='/instructions' classBtn='btn-play' classLink='route' />
                </div>
                <div className='container-img-ovni1'>
                    <img src={spaceShip} alt="space-ship" className='space-ship' />
                </div>
            </div>
        </>
    );
}

export default HomeView;