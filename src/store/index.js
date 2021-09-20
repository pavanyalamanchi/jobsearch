import { createStore } from 'redux'
import rootReducer from '../reducers'


export const initialState = {
    favourites: {
        companies: []
    }
}

const configureStore = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore