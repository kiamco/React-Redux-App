import React from 'react';
import CharContainer from './charContainer';

const WordBuilder = ({ charaterObjs }) => {
    return (
        <div className='word-container'>
            {charaterObjs.map((el,index) => <CharContainer key={index} charObj={el} />)}
        </div>
    )
}

export default WordBuilder;