import { createStore } from 'redux'
import rootReducer from '../reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//import storageSession from 'redux-persist/lib/storage/session'


export const initialState = {
    favourites: []
}

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = createStore(
    persistedReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(configureStore)

export default configureStore