import {
    RESET_GAME,
    PICK_WORD,
    FETCH_WORD_LIST,
    FETCH_WORD_LIST_FAILURE,
    FETCH_WORD_START,
    MATCH_CHAR,
    START_GAME,
    LIFE_DECREASE,
    decreaseLife
} from '../actions/wordBuilderAction';

const initialState = {
    isFetching: false,
    wordChoice: '',
    wordChars: [
        { char: 'L', isShow: true },
        { char: 'O', isShow: true },
        { char: 'A', isShow: true },
        { char: 'D', isShow: true },
        { char: 'I', isShow: true },
        { char: 'N', isShow: true },
        { char: 'G', isShow: true }
    ],
    wordList: '',
    life: 6,
};


export const WordReducer = (state = initialState, action) => {

    // picks random word
    const wordListParser = (words) => {
        let wordsArray = words.split('\n');
        return wordsArray[Math.floor(Math.random() * wordsArray.length)];
    }

    const updateWord = (newWord) => {
        return (
            newWord.split('').map(el => {
                return { char: el, isShow: false}
            })
        )
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
                wordChars: updateWord(state.wordChoice)
            };
        case MATCH_CHAR:
            return ({
                ...state,
                wordChars: state.wordChars.map(letter =>
                    // if payload matches a letter in selected word then show letter
                    letter.char === action.payload ? {
                        ...letter,
                        isShow: true,
                        isMatch: true
                    } :
                        letter
                )
            });
        case RESET_GAME:
            return {
                ...state,
                wordChoice: wordListParser(state.wordList),
                wordChars: updateWord(state.wordChoice),
                life:6
            };
        case FETCH_WORD_LIST_FAILURE:
            return {
                ...state,
                wordChars: [
                    { char: 'L', isShow: true },
                    { char: 'O', isShow: true },
                    { char: 'A', isShow: true },
                    { char: 'D', isShow: true },
                    { char: 'I', isShow: true },
                    { char: 'N', isShow: true },
                    { char: 'G', isShow: true },
                    { char: ' ', isShow: true },
                    { char: 'E', isShow: true },
                    { char: 'R', isShow: true },
                    { char: 'R', isShow: true },
                    { char: 'O', isShow: true },
                    { char: 'R', isShow: true },
                ]
            };
        case LIFE_DECREASE:
            return {
                ...state,
                life: state.life - 1
            }
        default:
            return state
    }
}