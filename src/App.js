import React, { useEffect } from 'react';
import WordBuilder from './components/wordBuilder';
import './styles/all.scss';
import { connect } from 'react-redux';
import { resetGame, startGame, matchChar, fetchWordList, pickWord } from './actions/wordBuilderAction';
import Keyboard from './components/keyboard';
import { resetKeys } from './actions/keyboardAction';

function App({
  isFetching,
  wordChars,
  wordChoice,
  wordList,
  resetGame,
  startGame,
  pickWord,
  matchChar,
  fetchWordList,
  resetKeys }) {

  useEffect(() => {
    fetchWordList();
    if (wordList !== '') {
      startGame();
    }
  }, [wordList, resetGame])

  const letterCheck = (letter) => {
    let matched = matchChar(letter);
    console.log(matched)
  }

  console.log(wordChoice)
  return (
    <div className="App">
      <button className='new-game' onClick={() => {
        resetGame();
        resetKeys();
      }}>New Game</button>
      <WordBuilder charaterObjs={wordChars} />
      <Keyboard matchLetter={letterCheck} letters={wordChars} />
    </div>
  );
}

const mapToStateProps = ({ wordReducer }) => {
  return ({
    isFetching: wordReducer.isFetching,
    wordChoice: wordReducer.wordChoice,
    wordChars: wordReducer.wordChars,
    wordList: wordReducer.wordList
  });
}



export default connect(
  mapToStateProps,
  { resetGame, startGame, fetchWordList, matchChar, resetKeys }
)(App);
