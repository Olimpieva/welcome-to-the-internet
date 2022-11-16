import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from './types';
import { setUser, clearUser } from './actions';

const initialState: InitialState = {
  isAuthorized: undefined,
  name: null
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      state.isAuthorized = true;
      state.name = action.payload;
    })
    .addCase(clearUser, (state) => {
      state.isAuthorized = false;
      state.name = null;
    });
});

export default userReducer;
