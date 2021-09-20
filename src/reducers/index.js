import { initialState } from '../store'

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return {
                favourites: [...state.favourites, action.payload]
            }
        default:
            return state
    }
}

export default rootReducer