import { combineReducers } from 'redux';
import { keyboardReducer } from './keyboardReducer';
import { WordReducer as wordReducer }  from './wordBuilderReducer';

export default combineReducers({
    keyboardReducer,
    wordReducer
});