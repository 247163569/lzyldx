import { initState } from './state/index'

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SLIDE_CHANGE":
            state.slide.slideState = !state.slide.slideState
            return state
        default:
            return state;
    }
}