import Axios from 'axios';

const FIND_CHAR = 'FIND_CHAR';
const FETCH_WORD = 'FETCH_WORD';
const RESET_GAME = 'RESET_GAME';
const FETCH_WORD_START = 'FETCH_WORD_START'
const FETCH_WORD_LIST = 'FETCH_WORD_LIST'
const FETCH_WORD_LIST_FAILURE = 'FETCH_WORD_LIST_FAILURE';

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

export const fetchWord = () => {
    return (dispatch({ type: FETCH_WORD }))
}