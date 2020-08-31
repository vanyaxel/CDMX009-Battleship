import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BoardPlayer1 from '../board/BoardPlayer1';
import BoardPlayer2 from '../board/BoardPlayer2';
import Winner from '../Winner';

import { getNotGuessedLocationP1 } from '../../store/player1';
import { getNotGuessedLocationP2 } from '../../store/player2';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './game-view.css';

import ModalFullScreen from '../General-Info/modal-instructions/ModalFullScreen';

import { userAdded } from '../../store/user';

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

function GameView() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const user = useSelector(state => state.entities.user);

    const notGuessedP1 = useSelector(getNotGuessedLocationP1);
    const notGuessedP2 = useSelector(getNotGuessedLocationP2);

    let statusGameP1 = notGuessedP1.length;
    let statusGameP2 = notGuessedP2.length;

    console.log('player 1', notGuessedP1);
    console.log('player 2', notGuessedP2);


    let userLS = JSON.parse(localStorage.getItem('userPlayer1'));

    let namePlayer1 = userLS[0].name;

    return (
        <>
            <div className='game-view'>
                {
                    statusGameP1 === 1 || statusGameP2 === 1 ?
                        (
                            <Winner />

                        ) : (
                            <>
                                <div className='game-view'>
                                    <div className='game-boards'>
                                        <Typography variant="h4" className={classes.nameText}
                                            gutterBottom>
                                            {namePlayer1}
                                        </Typography>
                                        <BoardPlayer1 />
                                    </div>
                                    <div className='game-boards'>
                                        <Typography variant="h4" className={classes.nameTextOpponent} gutterBottom>
                                            Oponente
                                    </Typography>
                                        <BoardPlayer2 />
                                    </div>
                                    <div>
                                        <ModalFullScreen />
                                    </div>
                                </div>
                            </>
                        )
                }

            </div>
        </>
    );
}

export default GameView;