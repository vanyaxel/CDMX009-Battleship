import React from 'react';
import { useSelector } from 'react-redux';

import { getNotGuessedLocationP1 } from '../../store/player1';
import { getNotGuessedLocationP2 } from '../../store/player2';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './game-view.css';

import BoardPlayer1 from '../board/BoardPlayer1';
import BoardPlayer2 from '../board/BoardPlayer2';
import GameOver from '../GameOver/GameOver';
import ModalFullScreen from '../General-Info/modal-instructions/ModalFullScreen';


const useStyles = makeStyles({
    nameText: {
        color: 'white',
        fontFamily: ['Atma',
            'cursive'].join(', '),
        paddingLeft: '20px',
        marginTop: '80px',
        marginBottom: 0,
    },
    nameTextOpponent: {
        color: 'white',
        fontFamily: ['Atma',
            'cursive'].join(', '),
        textAlign: 'right',
        paddingRight: '20px',
        marginTop: '80px',
        marginBottom: 0,
    }
});

function GameView() {
    const classes = useStyles();

    const notGuessedP1 = useSelector(getNotGuessedLocationP1);
    const notGuessedP2 = useSelector(getNotGuessedLocationP2);

    let statusGameP1 = notGuessedP1.length;
    let statusGameP2 = notGuessedP2.length;

    let userLS = JSON.parse(localStorage.getItem('userPlayer1'));

    let namePlayer1 = userLS[0].name;

    return (
        <>
            {
                statusGameP1 === 9 || statusGameP2 === 9 ?
                    (
                        <GameOver />

                    ) : (
                        <>
                            <div className='div1'>
                                <div className='div2'>
                                    <div className='div3'>
                                        <Typography variant="h4" className={classes.nameText}
                                            gutterBottom>
                                            {namePlayer1}
                                        </Typography>
                                        <BoardPlayer1 />
                                    </div>
                                    <div className='div3' >
                                        <Typography variant="h4" className={classes.nameTextOpponent} gutterBottom>
                                            Oponente
                                    </Typography>
                                        <BoardPlayer2 />
                                    </div>
                                </div>
                                <div className='btn-inst-game'>
                                    <ModalFullScreen />
                                </div>

                            </div>

                        </>
                    )
            }

        </>
    );
}

export default GameView;