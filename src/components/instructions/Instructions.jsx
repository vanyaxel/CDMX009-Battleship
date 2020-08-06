import React from 'react';
import './instructions.css';
import Btn from '../button/Button';
import ovni2 from '../../images/ovni2.png';

function Instructions() {
    return (
        <>
            <div className='container-instruction-view'>
                <img src={ovni2} alt='ovni2' className='ovni2' />
                <div className='container-instructions'>
                    <h2 className='title-instructions'>Instrucciones</h2>
                    <p className='text-instructions'>Eres un conquistador de planetas, y actualmente tienes 10 planetas que te pertenecen, pero entre mas planeta tengas mejor,  asi que tu proposito debe ser conquistar mas planetas.</p>

                    <p className='text-instructions'>Jugaras contra un oponente y deberas adivinar la posición de todos sus planetas, evitando a toda costa que el sepa la ubicación de los tuyos, si tu oponente adivina su ubicacion los perderas.</p>

                    <p className='text-instructions'>Gana el que adivine todas las ubicaciones de los planetas de su contrincante</p>
                </div>
                <div className='btn-instruction'>
                    <Btn name="jugar" route='/user-info' />
                </div>
            </div>
        </>

    );
}

export default Instructions;