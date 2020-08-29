import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Board from '../board/Board';
import BoardPlayer2 from '../board/BoardPlayer2';
import Btn from '../../components/button/Button';
import { planetAddedP2 } from '../../store/player2';


import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './game-view.css';

import BoardPlayer1 from '../board/BoardPlayer1';
import ModalFullScreen from '../General-Info/modal-instructions/ModalFullScreen';

const useStyles = makeStyles({
    nameText: {
        color: 'white',
        fontFamily: ['Atma',
            'cursive'].join(', '),
        position: 'relative',
        top: 35,
    },
    nameTextOpponent: {
        color: 'white',
        fontFamily: ['Atma',
            'cursive'].join(', '),
        position: 'relative',
        top: 35,
        textAlign: 'right'
    }
});

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function GameView() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const planetsPlacedPlayer2 = useSelector(state => state.entities.player2);

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
            <div className='game-view'>
                <div className='game-boards'>
                    <div>
                        <Typography variant="h4" className={classes.nameText}
                            gutterBottom>
                            Vanya Xel
                    </Typography>
                        <Board />
                    </div>
                    <Btn name='Guardar tablero' /* route='/game' */ classBtn='btn-play code' classLink='route' click={oponentPositions} />
                    <div>
                        <Typography variant="h4" className={classes.nameText}
                            gutterBottom>
                            Vanya Xel
                    </Typography>
                        <BoardPlayer1 />
                    </div>
                    <div>
                        <Typography variant="h4" className={classes.nameTextOpponent} gutterBottom>
                            Oponente
                    </Typography>
                        <BoardPlayer2 />
                    </div>
                    {/* <div>
                        <Typography variant="h4" className={classes.nameTextOpponent} gutterBottom>
                            Oponente
                    </Typography>
                        <Board />
                    </div> */}
                </div>
                <ModalFullScreen />

            </div>
        </>
    );
}

export default GameView;