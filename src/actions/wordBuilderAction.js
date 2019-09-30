import Axios from 'axios';

export const RESET_GAME = 'RESET_GAME';
export const FETCH_WORD_START = 'FETCH_WORD_START'
export const FETCH_WORD_LIST = 'FETCH_WORD_LIST'
export const FETCH_WORD_LIST_FAILURE = 'FETCH_WORD_LIST_FAILURE';
export const START_GAME = 'START_GAME';
export const MATCH_CHAR = 'MATCH_CAHR';
export const PICK_WORD = 'PICK_WORD';

// http://app.linkedin-reach.io/words?difficulty=10
const getWordListByLevel = (level, dispatch) => {

}
export const fetchWordList = () => {
    return function(dispatch) {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        dispatch({ type: FETCH_WORD_START });
        // setTimeout(() => {
        Axios.get(proxy + 'http://app.linkedin-reach.io/words?difficulty=10')
            .then(res => {
                // console.log(res)
                dispatch({
                    type: FETCH_WORD_LIST,
                    payload: res.data
                });
                dispatch({ type: PICK_WORD })

            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: FETCH_WORD_LIST_FAILURE,
                    payload: err.message
                })
            });
        // }, 0);
    }
}

export const resetGame = () => {
    return ({ type: RESET_GAME });
}

export const startGame = () => {
    return function(dispatch) {
        dispatch({ type: START_GAME })
    }
}

export const matchChar = (character) => {
    return ({
        type: MATCH_CHAR,
        payload: character
    });
}

export const pickWord = () => {
    return function(dispatch) {
        dispatch({ type: PICK_WORD })
    }
}