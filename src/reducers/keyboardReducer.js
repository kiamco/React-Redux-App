import { CLICK, BUILD } from "../actions/keyboardAction"

const initState = {
    letters: 'abcdefghijklmnopqrstuvwxyz',
    keys: []
}

export const keyboardReducer = (state = initState, action) => {
    switch (action.type) {
        case BUILD:
            return {
                ...state,
                // creates key objects
                keys: state.letters.split('').map(el => {
                    return {
                        key: el,
                        isClicked: false
                    }
                })
            }
        case CLICK:
            return {
                ...state,
                keys: state.keys.map(letter =>
                    letter.key === action.payload ? {
                        ...letter,
                        isClicked: true
                    } :
                    letter
                )
            }
        default:
            return state;

    }
}