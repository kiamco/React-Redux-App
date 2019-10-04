import React, { useEffect } from 'react';
import WordBuilder from './components/wordBuilder';
import './styles/all.scss';
import { connect } from 'react-redux';
import { resetGame, startGame, matchChar, fetchWordList, pickWord, decreaseLife } from './actions/wordBuilderAction';
import Keyboard from './components/keyboard';
import { resetKeys } from './actions/keyboardAction';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'


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
  resetKeys,
  life }) {

  useEffect(() => {
    fetchWordList();
    if (wordList !== '') {
      startGame();
    }
  }, [wordList, resetGame])

  const letterCheck = (letter) => matchChar(letter);

  const heartSwitch = () => {
    if (life === 6) {
      return 'heartbeat'
    } else if (life >= 3) {
      return 'heart'
    } else {
      return 'heart outline'
    }
  }

  return (
    <div className="App">
      <header>
        <h1 className='title'>HANGMAN</h1>
        <p>LEVEL 01</p>
      </header>

      <WordBuilder charaterObjs={wordChars} />
      <Keyboard matchLetter={letterCheck} letters={wordChars} />
      <div className='extras'>
        <div className='life'>
          <h2>{life}</h2>
          <Icon name={heartSwitch()} color='red' size='big' />
        </div>
        <button className='new-game' onClick={() => {
          resetGame();
          resetKeys();
        }}>New Game</button>
      </div>
    </div>

  );
}

const mapToStateProps = ({ wordReducer }) => {
  return ({
    isFetching: wordReducer.isFetching,
    wordChoice: wordReducer.wordChoice,
    wordChars: wordReducer.wordChars,
    wordList: wordReducer.wordList,
    life: wordReducer.life
  });
}



export default connect(
  mapToStateProps,
  { resetGame, startGame, fetchWordList, matchChar, resetKeys }
)(App);
