import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from './types';
import { fetchMemes } from './actions';

const initialState: InitialState = {
  items: [],
  loading: false,
  loaded: false
};

const memesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMemes.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchMemes.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.loaded = true;
    })
    .addCase(fetchMemes.rejected, (state) => {
      state.loading = false;
      state.loaded = false;
    });
});

export default memesReducer;
