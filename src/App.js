import React, { useEffect } from 'react';
import WordBuilder from './components/wordBuilder';
import './styles/all.scss';
import { connect } from 'react-redux';
import { resetGame, startGame, matchChar, fetchWordList, pickWord, decreaseLife, lost} from './actions/wordBuilderAction';
import Keyboard from './components/keyboard';
import { resetKeys, blockKeys } from './actions/keyboardAction';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import scaffold from './img/scaffold.png';


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
  life,
  decreaseLife,
  blockKeys,
  lost }) {

  useEffect(() => {
    fetchWordList();
    if (wordList !== '') {
      startGame();
    }

 
  }, [wordList, resetGame, blockKeys, lost ])

  //  takes in a letter from the keyboard component and checks if there is a match
  const letterCheck = (letter) => matchChar(letter);

  // change heart icon depending on the life points remaining
  const heartSwitch = () => {
    if (life === 6) {
      return 'heartbeat'
    } else if (life >= 3) {
      return 'heart'
    } else {
      return 'heart outline'
    }
  }

  // this function keeps track when player misses or hits a letter
  const lifeTracker = (letters, key) => {

    //length returns a 0 if chosen letter doesn't match
    let length = letters.filter(letter => letter.char === key);
    return length < 1 && life > 0 ? decreaseLife() : 1;
  }

  // let gameOver = life === 0 ? lost() : false;
  // if player life reach 0
  
  let gameOver = life === 0 ? blockKeys() : false;

  return (
    <div className="App">
      <header>
        <h1 className='title'>HANGMAN</h1>
        <p>LEVEL 01</p>
      </header>
      <section className='hangman'>
        {
          gameOver
            ?
            <h1 className='loser'>YOU LOSE</h1> 
            :
            <img src={scaffold} alt="" />
        }
      </section>
      <WordBuilder charaterObjs={wordChars} />
      <Keyboard matchLetter={letterCheck} letters={wordChars} lifeTracker={lifeTracker} />
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
  {
    resetGame,
    startGame,
    fetchWordList,
    matchChar,
    resetKeys,
    decreaseLife,
    blockKeys,
    lost
  }
)(App);
