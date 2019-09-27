import {
    RESET_GAME,
    PICK_WORD,
    FETCH_WORD_LIST,
    FETCH_WORD_LIST_FAILURE,
    FETCH_WORD_START,
    MATCH_CHAR,
    START_GAME
} from '../actions/index';

const initialState = {
    isFetching: false,
    wordChoice: '',
    wordChars: [{}],
    wordList: ''
};


export const WordReducer = (state = initialState, action) => {

    // picks random word
    const wordListParser = (words) => {
        let wordsArray = words.split('\n');
        return wordsArray[Math.floor(Math.random() * wordsArray.length)];
    }

    switch (action.type) {
        case FETCH_WORD_START:
            return { ...state, isFetching: true };
        case FETCH_WORD_LIST:
            return { ...state, wordList: action.payload, isFetching: false };
        case PICK_WORD:
            return { ...state, wordChoice: wordListParser(state.wordList) }
        case START_GAME:
            return {
                ...state,
                wordChars: [
                    ...state.wordChars,
                    // creates an obj per each charater of word choice
                    state.wordChoice.split('').map(el => {
                        return { char: el, isShow: false }
                    })
                ]
            }
        default:
            return state
    }
}