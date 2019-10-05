import Axios from 'axios';

export const RESET_GAME = 'RESET_GAME';
export const FETCH_WORD_START = 'FETCH_WORD_START'
export const FETCH_WORD_LIST = 'FETCH_WORD_LIST'
export const FETCH_WORD_LIST_FAILURE = 'FETCH_WORD_LIST_FAILURE';
export const START_GAME = 'START_GAME';
export const MATCH_CHAR = 'MATCH_CAHR';
export const PICK_WORD = 'PICK_WORD';
export const LIFE_DECREASE = 'LIFE_DECREASE';
let words = window.localStorage.getItem('data');

// http://app.linkedin-reach.io/words?difficulty=10

export const fetchWordList = () => {
    return function(dispatch) {
        console.log(words); 
        if(words === null){
            const proxy = "https://cors-anywhere.herokuapp.com/";
            dispatch({ type: FETCH_WORD_START });
            
            setTimeout(() => {
                Axios.get(proxy + 'http://app.linkedin-reach.io/words?difficulty=10')
                    .then(res => {
                        // 
                        words = window.localStorage.setItem('data', res.data)
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
        dispatch({ type: PICK_WORD })
    }
};

export const decreaseLife = () => {
    return (dispatch) => dispatch({ type: LIFE_DECREASE })
}