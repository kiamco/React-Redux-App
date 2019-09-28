import React from 'react';
import { directive } from '@babel/types';

const Keyboard = ({matchLetter}) => {
    const letters = 'abcdefghijklmnopqrstuv';

    return(
        <div className='keyboard'>
            {letters.split('').map(el => <button className='keyboard-letter'
            onClick={()=>matchLetter(el)}>
            {el}</button>)}
        </div>
    )
}

export default Keyboard;