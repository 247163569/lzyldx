import { initState } from './state'

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SLIDE_CHANGE":
            state.slideState = !state.slideState
            return state
        default:
            return state;
    }
}