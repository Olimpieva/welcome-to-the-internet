import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';

const selectState = (state: RootState) => state.user;

const selectIsAuthorized = createSelector([selectState], (state) => state.isAuthorized);

const selectUsername = createSelector([selectState], (state) => state.name);

export { selectIsAuthorized, selectUsername };
