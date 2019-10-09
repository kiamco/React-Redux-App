export const CLICK = 'CLICK'
export const BUILD = 'BUILD'
export const RESET = 'RESET'
export const BLOCK = 'BLOCK'

export const isClicked = (letter) => {
    return (dispatch) => dispatch({ type: CLICK, payload: letter });
}

export const buildKeyboard = () => {
    return (dispatch) => dispatch({ type: BUILD });
}

export const resetKeys = () => {
    return (disaptch) => disaptch({ type: RESET });
}

export const blockKeys = () => {
    return (dispatch) => dispatch({ type: BLOCK });
}