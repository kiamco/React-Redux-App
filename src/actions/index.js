import Axios from 'axios';

export const FIND_CHAR = 'FIND_CHAR';
export const PICK_WORD = 'PICK_WORD';
export const RESET_GAME = 'RESET_GAME';
export const FETCH_WORD_START = 'FETCH_WORD_START'
export const FETCH_WORD_LIST = 'FETCH_WORD_LIST'
export const FETCH_WORD_LIST_FAILURE = 'FETCH_WORD_LIST_FAILURE';
export const START_GAME = 'START_GAME';

// http://app.linkedin-reach.io/words?difficulty=10

export const fetchWordList = () => {
    dispatch({ type: FETCH_WORD_START });
    return function (dispatch) {
        setTimeout(() => {
            Axios.get('http://app.linkedin-reach.io/words?difficulty=10')
                .then(res => {
                    dispatch({
                        type: FETCH_WORD_LIST,
                        payload: res.data
                    })
                })
                .catch(err => {
                    console.log(err);
                    dispatch({
                        type: FETCH_WORD_LIST_FAILURE,
                        payload: err.message
                    })
                });
        }, 2000);
    }
}

export const findChar = (char) => {
    return (dispatch({
        type: FIND_CHAR,
        payload: char
    }));
}

export const resetGame = () => {
    return (dispatch({ type: RESET_GAME }));
}

export const pickWord = () => {
    return (dispatch({ type: PICK_WORD }))
}

export const startGame = () => {
    return (dispatch({type:START_GAME}))
}