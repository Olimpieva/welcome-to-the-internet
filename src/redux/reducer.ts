import { combineReducers } from '@reduxjs/toolkit';
import memesReducer from './memes/reducer';

const reducer = combineReducers({
  memes: memesReducer
});

export default reducer;
