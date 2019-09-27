import Axios from 'axios';

export const RESET_GAME = 'RESET_GAME';
export const FETCH_WORD_START = 'FETCH_WORD_START'
export const FETCH_WORD_LIST = 'FETCH_WORD_LIST'
export const FETCH_WORD_LIST_FAILURE = 'FETCH_WORD_LIST_FAILURE';
export const START_GAME = 'START_GAME';
export const MATCH_CHAR = 'MATCH_CAHR';
export const PICK_WORD = 'PICK_WORD';

// http://app.linkedin-reach.io/words?difficulty=10

export const fetchWordList = () => {
    return function (dispatch) {
        dispatch({ type: FETCH_WORD_START });
        setTimeout(() => {
            Axios.get('http://app.linkedin-reach.io/words?difficulty=10')
                .then(res => {
                    console.log(res)
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

export const resetGame = () => {
    return ({ type: RESET_GAME });
}

export const startGame = () => {
    return ({ type: START_GAME })
}

export const matchChar = (character) => {
    return ({
        type: MATCH_CHAR,
        payload: character
    });
}

export const pickWord = () => {
    return ({type:PICK_WORD})
}