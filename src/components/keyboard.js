import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isClicked, buildKeyboard, resetKeys } from '../actions/keyboardAction';
import {decreaseLife} from '../actions/wordBuilderAction';

const Keyboard = ({
    matchLetter,
    isClicked,
    buildKeyboard,
    keys,
    resetKeys,
    decreaseLife
}) => {

    useEffect(() => {
        buildKeyboard()
    }, [buildKeyboard])

    return (
        <div className='keyboard'>
            {
                // iterate through letters and create buttons
                keys.map(el =>
                    <button
                        className='keyboard-letter'
                        onClick={(e) => {
                            matchLetter(el.key);
                            isClicked(el.key);
                            decreaseLife();

                        }}
                        disabled={el.isClicked}
                    >
                        {el.key}
                    </button>)
            }
        </div>
    )
}

const mapToStateProp = ({ keyboardReducer }) => {
    return ({
        letters: keyboardReducer.letters,
        keys: keyboardReducer.keys
    })
}

export default connect(
    mapToStateProp,
    { isClicked, buildKeyboard, resetKeys, decreaseLife}
)(Keyboard);