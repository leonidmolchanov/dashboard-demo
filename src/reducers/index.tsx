import {combineReducers} from "redux";
import CardsStoreReducer from './cardsStore'
import AvtorsStoreReducer from './avtorsStore'
import SearchStringReducer from './searchString'
const allReducers =
    //@ts-ignore

    combineReducers({
    cardsStore:CardsStoreReducer,
    avtorsStore:AvtorsStoreReducer,
        searchString:SearchStringReducer
})


export default allReducers;