import { createStore, combineReducers } from "redux"
import animalsReducer from '../reducers/animals'
import filtersReducer from '../reducers/filters'
import { devToolsEnhancer } from 'redux-devtools-extension'

export default () => {
    return createStore(
        combineReducers({
            animals: animalsReducer,
            filters: filtersReducer
        },
    ), devToolsEnhancer(),
    )
}
