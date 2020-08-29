import React from 'react';
import Btn from '../../button/Button';
import './info-game.css';
import { useDispatch, useSelector } from 'react-redux';
import { planetAddedP2 } from '../../../store/player2';
import PlanetsToPlace from '../planet/PlanetsToPlace';
import ModalInstructions from '../modal-instructions/ModalInstructions';

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function InfoGame() {
    const dispatch = useDispatch();

    const planetsPlacedPlayer1 = useSelector(state => state.entities.player1);
    const planetsPlacedPlayer2 = useSelector(state => state.entities.player2);

    console.log('esto es lo que hay en redux 1', planetsPlacedPlayer1);
    console.log('esto es lo que hay en redux 2', planetsPlacedPlayer2);


    const oponentPositions = () => {
        let arrPositions = [];
        for (let paso = 0; paso < 10; paso++) {
            let letter = columns[Math.floor(Math.random() * (columns.length))];
            let number = rows[Math.floor(Math.random() * (rows.length))];

            let position = letter + number;
            dispatch(planetAddedP2({ position: position }));
        };
        return arrPositions;
    };

    return (
        <>
            <div className='container-user-info'>
                <div className='name-user-selected'>
                    <p className='text-general-info'>Elige tu nombre</p>
                    <input type='text' className='input-name-user-selected' placeholder='Nombre aqui' />
                    <div className='line-name-user-selected'></div>
                </div>
                {/*                 <div className='btns-code-game'>
                    <Btn name='Generar código' classBtn='btn-play code' classLink='route' />
                    <Btn name='Ingresar código' classBtn='btn-play code' classLink='route' />
                </div> */}
                <div className='name-user-selected'>
                    <p className='text-general-info'>Tu código es:</p>
                    <input type='text' className='input-name-user-selected' value='CQ1298QPWO37' />
                    <div className='line-name-user-selected'></div>
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
                <Btn name='Guardar tablero' /* route='/game' */ classBtn='btn-play code' classLink='route' click={oponentPositions} />
            </div>
        </>
    );
}

export default InfoGame;