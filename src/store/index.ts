import {createStore} from 'redux';
import allReducers from '../reducers';


let persistedState = {}
const store = createStore(allReducers, persistedState);

export default store