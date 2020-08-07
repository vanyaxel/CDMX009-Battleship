import React from 'react';
import InfoGame from '../info-game/InfoGame';
import Board from '../../board/Board';

import './general-info.css';

function GeneralInfo() {
    return (
        <>
            <div className='general-info-view'>
                <InfoGame />
                <Board />
            </div>
        </>
    );
}

export default GeneralInfo;