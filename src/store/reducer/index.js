import {combineReducers} from 'redux'
import authreducer from './auth-reducer';
import appreducer from './app-reducer';


export default combineReducers({
    auth:authreducer,
    app:appreducer

})
