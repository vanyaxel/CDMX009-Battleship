import React from 'react';

import './general-info.css';

import InfoGame from '../info-game/InfoGame';
import Board from '../../board/Board';

function GeneralInfo() {
    return (
        <div className='general-info-view'>
            <InfoGame />
            <Board />
        </div>
    );
};

export default GeneralInfo;