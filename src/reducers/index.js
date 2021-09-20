import { initialState } from '../store'

const rootReducer = (state = initialState.favourites, action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return {
                ...state,
                companies: [...state.companies, action.payload]
            }
        default:
            return state
    }
}

export default rootReducer