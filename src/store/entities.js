import { combineReducers } from 'redux';
import player1Reducer from './player1';
import player2Reducer from './player2';
import userReducer from './user';
import boardReducer from './boardOponent';
import randomLocationReducer from './randomLocation';

export default combineReducers({
    player1: player1Reducer,
    player2: player2Reducer,
    user: userReducer,
    boardOponent: boardReducer,
    randomLocation: randomLocationReducer
});