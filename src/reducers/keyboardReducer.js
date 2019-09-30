import { CLICK, BUILD, RESET } from "../actions/keyboardAction"

const initState = {
    letters: 'abcdefghijklmnopqrstuvwxyz',
    keys: []
}

const newKeyboard = (letters) => {
    return (
        letters.split('').map(el => {
            return {
                key: el,
                isClicked: false
            }
        })
    );
}

export const keyboardReducer = (state = initState, action) => {
    switch (action.type) {
        case BUILD:
            return {
                ...state,
                // creates key objects
                keys: newKeyboard(state.letters)
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
        case RESET:
            return {
                ...state,
                // creates key objects
                keys: newKeyboard(state.letters)
            }
        default:
            return state;

    }
}