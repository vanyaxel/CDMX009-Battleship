import { combineReducers } from 'redux';
import planetsReducer from './planets';
import userReducer from './user';
import boardReducer from './boardOponent';

export default combineReducers({
    planets: planetsReducer,
    users: userReducer,
    boardOponent: boardReducer
});