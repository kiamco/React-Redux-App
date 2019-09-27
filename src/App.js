import React, {useEffect} from 'react';
import WordBuilder from './components/wordBuilder';
import './App.css';
import {connect} from 'react-redux';
import {resetGame, startGame, matchChar,fetchWordList } from './actions/index';

function App(props) {

  useEffect(()=> {
    props.fetchWordList();
  },[])
  return (
    <div className="App">
      <WordBuilder charaterObjs={props.wordChars}/>
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
  {resetGame, startGame, fetchWordList, matchChar}
)(App);
