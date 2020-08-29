import React from 'react';
import './general-info.css';

import InfoGame from '../info-game/InfoGame';
import BoardPlayer1 from '../../board/BoardPlayer1';

function GeneralInfo() {
    return (
        <>
            <div className='general-info-view'>
                <InfoGame />
                <BoardPlayer1 />
            </div>
        </>
    );
};

export default GeneralInfo;