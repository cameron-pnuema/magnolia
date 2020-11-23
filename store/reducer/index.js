import { combineReducers } from 'redux';
import counterReducer from './counter';
import userReducer from './user';
import popupUniversal from './popupUniversal';
import lot from './lot';
import popup from './popup';
import customization from './customization';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    popupUniversal,
    lot,
    popup,
    customization,
});

export default rootReducer;