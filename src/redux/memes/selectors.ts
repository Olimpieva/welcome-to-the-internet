import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';

const selectState = (state: RootState) => state.memes;

const selectMemes = createSelector([selectState], (state) => state.items);

const selectMemesLoading = createSelector([selectState], (state) => ({
  loading: state.loading,
  loaded: state.loaded
}));

export { selectMemes, selectMemesLoading };
