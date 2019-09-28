import React, { useEffect } from 'react';
import WordBuilder from './components/wordBuilder';
import './styles/all.scss';
import { connect } from 'react-redux';
import { resetGame, startGame, matchChar, fetchWordList, pickWord } from './actions/index';

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

  return (
    <div className="App">
      <WordBuilder charaterObjs={wordChars} />
    </div>
  );
}

const mapToStateProps = state => {
  return ({
    isFetching: state.isFetching,
    wordChoice: state.wordChoice,
    wordChars: state.wordChars,
    wordList: state.wordList
  });
}



export default connect(
  mapToStateProps,
  { resetGame, startGame, fetchWordList, matchChar }
)(App);
