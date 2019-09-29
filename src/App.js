import React, { useEffect } from 'react';
import WordBuilder from './components/wordBuilder';
import './styles/all.scss';
import { connect } from 'react-redux';
import { resetGame, startGame, matchChar, fetchWordList, pickWord } from './actions/wordBuilderAction';
import Keyboard from './components/keyboard';
function App({ 
  isFetching,
  wordChars,
  wordChoice,
  wordList,
  resetGame,
  startGame,
  pickWord,
  matchChar, 
  fetchWordList}) {

  useEffect(() => {
    fetchWordList();
    if (wordList !== '') {
      startGame();
    }
  }, [wordList])

  const letterCheck = (letter) => {
    let matched = matchChar(letter);
    console.log(matched)
  }

  console.log(wordChars)
  return (
    <div className="App">
      <WordBuilder charaterObjs={wordChars} />
      <Keyboard  matchLetter={letterCheck} letters={wordChars}/>
    </div>
  );
}

const mapToStateProps = ({wordReducer}) => {
  return ({
    isFetching: wordReducer.isFetching,
    wordChoice: wordReducer.wordChoice,
    wordChars: wordReducer.wordChars,
    wordList: wordReducer.wordList
  });
}



export default connect(
  mapToStateProps,
  { resetGame, startGame, fetchWordList, matchChar }
)(App);
