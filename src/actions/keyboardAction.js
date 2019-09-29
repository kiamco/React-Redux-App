export const CLICK = 'CLICK'
export const BUILD = 'BUILD'

export const isClicked = (letter) => {
    return (dispatch) => dispatch({ type: CLICK, payload: letter });
}

export const buildKeyboard = () => {
    return (dispatch) => dispatch({ type: BUILD });
}