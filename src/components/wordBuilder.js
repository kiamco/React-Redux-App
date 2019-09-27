import React from 'react';
import CharContainer from './charContainer';

const WordBuilder = ({ charaterObjs }) => {
    return (
        <div className='word-container'>
            {charaterObjs.map(el => <CharContainer charObj={el} />)}
        </div>
    )
}

export default WordBuilder;