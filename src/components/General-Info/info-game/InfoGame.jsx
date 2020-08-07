import React from 'react';
import Btn from '../../button/Button';
import './info-game.css';

import PlanetsToPlace from '../planet/PlanetsToPlace';
import ModalInstructions from '../modal instructions/modal/ModalInstructions';
import ModalOvni from '../modal instructions/modal-img-ovni/ModalImgOvni';

function InfoGame() {
    return (
        <>
            <div className='container-user-info'>
                <div className='name-user-selected'>
                    <p className='text-general-info'>Elige tu nombre</p>
                    <input type='text' className='input-name-user-selected' placeholder='Nombre aqui' />
                </div>
                {/*                 <div className='btns-code-game'>
                    <Btn name='Generar código' route='/game' classBtn='btn-play code' classLink='route' />
                    <Btn name='Ingresar código' route='/game' classBtn='btn-play code' classLink='route' />
                    <input type='text' className='input-name-user-selected' />
                </div> */}
                <div className='name-user-selected'>
                    <p className='text-general-info'>Tu código es:</p>
                    <input type='text' className='input-name-user-selected' value='CQ1298QPWO37' />
                </div>
                <div className='container-place-planets'>
                    <div className='text-place-planet'>
                        <p className='text-general-info'>Acomoda tus planetas en el tablero</p>
                        <ModalInstructions />
                    </div>
                    <div className='container-planets'>
                        <PlanetsToPlace />
                    </div>
                </div>
                <Btn name='Guardar tablero' route='/game' classBtn='btn-play code' classLink='route' />
                <ModalOvni />
            </div>
        </>
    );
}

export default InfoGame;