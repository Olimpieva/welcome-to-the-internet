import { combineReducers } from '@reduxjs/toolkit';
import memesReducer from './memes/reducer';
import userReducer from './user/reducer';

const reducer = combineReducers({
  user: userReducer,
  memes: memesReducer
});

export default reducer;
