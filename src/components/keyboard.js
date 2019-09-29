import React, { useState } from 'react';

const Keyboard = ({ matchLetter }) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    return (
        <div className='keyboard'>
            {
                // iterate through letters and create buttons
                letters.split('').map(el =>
                    <button
                        className='keyboard-letter'
                        onClick={(e) =>{
                            matchLetter(el);
                        }}
                    >
                        {el}
                    </button>)
            }
        </div>
    )
}

export default Keyboard;