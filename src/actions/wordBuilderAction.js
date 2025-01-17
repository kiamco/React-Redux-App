import Axios from 'axios';

export const RESET_GAME = 'RESET_GAME';
export const FETCH_WORD_START = 'FETCH_WORD_START'
export const FETCH_WORD_LIST = 'FETCH_WORD_LIST'
export const FETCH_WORD_LIST_FAILURE = 'FETCH_WORD_LIST_FAILURE';
export const START_GAME = 'START_GAME';
export const MATCH_CHAR = 'MATCH_CAHR';
export const PICK_WORD = 'PICK_WORD';
export const LIFE_DECREASE = 'LIFE_DECREASE';
export const LOST = 'LOST';
let words = window.localStorage.getItem('data');

// http://app.linkedin-reach.io/words?difficulty=10


export const fetchWordList = () => {
    return function(dispatch) {
        if (words === null) {
            const proxy = "https://cors-anywhere.herokuapp.com/";
            dispatch({ type: FETCH_WORD_START });

            setTimeout(() => {
                Axios.get(proxy + 'http://app.linkedin-reach.io/words?difficulty=5')
                    .then(res => {
                        // save data to local storage
                        words = window.localStorage.setItem('data', res.data)

                        // dispatch to reducers
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
            }, 1000);
        } else {
            // use local storage if data is in 
            dispatch({
                type: FETCH_WORD_LIST,
                payload: window.localStorage.getItem('data')
            });
            dispatch({ type: PICK_WORD })
        }


    }
};

export const resetGame = () => {
    return ({ type: RESET_GAME });
};

export const startGame = () => {
    return function(dispatch) {
        dispatch({ type: START_GAME })
    }
};

export const matchChar = (character) => {
    return ({
        type: MATCH_CHAR,
        payload: character
    });
};

export const pickWord = () => {
    return function(dispatch) {
        dispatch({ type: PICK_WORD });
    }
};

export const decreaseLife = () => {
    return (dispatch) => dispatch({ type: LIFE_DECREASE });
};

export const lost = () => {
    return (dispatch) => dispatch({ type: LOST });
};