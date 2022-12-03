import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

const setUser = createAction<string>('user/setUser');

const clearUser = createAction('user/clearUser');

const identifyUser = createAsyncThunk('user/identifyUser', async (_, { dispatch }) => {
  const username = sessionStorage.getItem('username');

  if (!username) {
    await dispatch(clearUser());

    return;
  }

  await dispatch(setUser(username));
});

// @ts-ignore
const authUser = createAsyncThunk<undefined, string, any>('user/authUser', async (username, { dispatch }) => {
  sessionStorage.setItem('username', username);

  await dispatch(setUser(username));
});

export { setUser, identifyUser, clearUser, authUser };
